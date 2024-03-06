import {IFileItem} from '../../index'
import {toMarkdown} from './toMarkdown'
import {stat, writeFile} from 'fs/promises'
import {db} from '../../store/db'
import {basename, join, parse} from 'path'
import {renameSync} from 'fs'
import {runInAction} from 'mobx'
import {findAbsoluteLinks} from '../../store/parserNode'

export const updateNode = async (node: IFileItem) => {
  if (node.filePath && node.ext === 'md') {
    const md = toMarkdown(node.schema || [])
    try {
      await writeFile(node.filePath, md, {encoding: 'utf-8'})
      const links = findAbsoluteLinks(node.schema!, node.filePath)
      const s = await stat(node.filePath)
      await db.file.update(node.cid, {
        filePath: node.filePath,
        updated: s.mtime.valueOf(),
        schema: node.schema,
        links
      })
      node.links = links
      db.saveRecord(node)
    } catch (e) {
      console.error('save fail', e)
    }
  }
}

const renameFiles = (nodes: IFileItem[], dir: string) => {
  for (let n of nodes) {
    const path = join(dir, basename(n.filePath))
    db.file.update(n.cid, {
      filePath: path
    })
    runInAction(() => {
      n.filePath = path
    })
    if (n.folder && n.children?.length) {
      renameFiles(n.children, path)
    }
  }
}

export const updateFilePath = async (node: IFileItem, targetPath: string) => {
  try {
    if (node.filePath === targetPath) return
    if (!node.ghost) {
      renameSync(node.filePath, targetPath)
      const s = await stat(targetPath)
      runInAction(() => {
        node.filePath = targetPath
        node.filename = parse(targetPath).name
      })
      await db.file.update(node.cid, {
        filePath: targetPath,
        updated: s.mtime.valueOf()
      })
      if (node.folder) {
        renameFiles(node.children || [], targetPath)
      }
    } else {
      runInAction(() => {
        node.filePath = targetPath
        node.filename = parse(targetPath).name
      })
    }
  } catch (e) {
    console.error('update filePath', e)
  }
}
