import * as Electron from 'electron'
import {nanoid} from 'nanoid'
import {dialog} from 'electron'
import {is} from '@electron-toolkit/utils'
const ipcRenderer = window.electron.ipcRenderer

let taskMap = new Map<string, Function>()

ipcRenderer.on('task-result', (e, id: string, result: any) => {
  taskMap.get(id)?.(result)
  taskMap.delete(id)
})
export const openDialog = (options: Parameters<typeof dialog['showOpenDialog']>[0]) => {
  return ipcRenderer.invoke('showOpenDialog', options) as Promise<Electron.OpenDialogReturnValue>
}

export const saveDialog = (options: Parameters<typeof dialog['showSaveDialog']>[0]) => {
  return ipcRenderer.invoke('save-dialog', options) as Promise<Electron.SaveDialogReturnValue>
}

export const MainApi = {
  closeWindow() {
    ipcRenderer.send('close-window')
  },
  getSystemDark() {
    return ipcRenderer.invoke('get-system-dark')
  },
  setWin(data: {openFolder?: string, openFile?: string}) {
    ipcRenderer.send('set-win', data)
  },
  relaunch() {
    ipcRenderer.send('relaunch')
  },
  selectFolder() {
    return openDialog({
      properties: ['openDirectory']
    })
  },
  sendToSelf(task: string, ...args: any[]) {
    ipcRenderer.send('send-to-self', task, ...args)
  },
  createNewFile(options?: {
    defaultPath: string
  }) {
    return saveDialog({
      title: '创建Markdown文件',
      properties: ['createDirectory'],
      securityScopedBookmarks: true,
      filters: [
        {name: 'markdown', extensions: ['md']}
      ],
      ...options
    })
  },
  openFile(ext = ['md', 'markdown']) {
    return openDialog({
      title: '打开文件',
      properties: ['openFile'],
      filters: [{name: 'f', extensions: ext}]
    })
  },
  open(rootPath?: string) {
    return openDialog({
      title: '打开文件',
      properties: ['openFile', 'openDirectory'],
      defaultPath: rootPath,
      filters: [{name: 'f', extensions: ['md', 'markdown']}]
    })
  },
  openTreeContextMenu(params: {
    type: 'rootFolder' | 'file' | 'folder'
    filePath?: string
  }) {
    ipcRenderer.send('tree-context-menu', params)
  },
  moveToTrash(path: string) {
    ipcRenderer.send('move-to-trash', path)
  },
  openToolMenu(filePath?: string) {
    ipcRenderer.send('tool-menu', filePath)
  },
  maxSize() {
    ipcRenderer.send('max-size')
  },
  getServerConfig() {
    return ipcRenderer.invoke('getServerConfig')
  },
  parseFiles(files: string[]) {
    return new Promise<[{path: string, schema: any}]>((resolve, reject) => {
      const id = nanoid()
      taskMap.set(id, resolve)
      ipcRenderer.send('to-worker', 'parse-files', id, files)
      setTimeout(reject, 10000)
    })
  },
  getCachePath():Promise<string> {
    return ipcRenderer.invoke('getCachePath')
  },
  openInFolder(path: string) {
    ipcRenderer.send('openInFolder', path)
  },
  tableMenu() {
    ipcRenderer.send('table-menu')
  },
  mkdirp(path: string) {
    return ipcRenderer.invoke('mkdirp', path)
  },
  setEditorContext(ctx: string = '', isTop = true) {
    ipcRenderer.send('changeContext', ctx, isTop)
  }
}