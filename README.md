<h1><img src="resources/icon.png" width="25"/>Inkdown</h1>
Improve markdown reading and editing experience, and facilitate network sharing.

[Documentation](https://doc.inkdown.me/book/inkdown/inkdown) | [中文文档](https://doc.inkdown.me/book/%E9%9D%92%E7%9F%B3%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3)

|                                                                               <img src="docs/assets/apple.svg" width="40">                                                                                |                                                                             <img src="docs/assets/windows.svg" width="40"/>                                                                              |                                                                                                                                                                                                                   <img src="docs/assets/linux.svg" width="40"/>                                                                                                                                                                                                                   | <img src="docs/assets/chrome.svg" width="36"/> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------- |
| [mac-arm64](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-mac-arm64.dmg) <br/> [mac-x64](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-mac-x64.dmg) | [win-arm64](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-win-arm64.exe)<br/> [win-x64](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-win-x64.exe) | [linux-amd64.deb](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-linux-amd64.deb) \| [linux-x86_64.AppImage](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-linux-x86_64.AppImage) <br/> [linux-arm64.AppImage](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-linux-arm64.AppImage) \| [linux-arm64.deb](https://github.com/1943time/bluestone/releases/latest/download/Bluestone-linux-arm64.deb) | [deploy](https://doc.inkdown.me/book/inkdown/deploy-to-linux)<br/>[deploy-cn](https://doc.inkdown.me/book/%E9%9D%92%E7%9F%B3%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/%E9%83%A8%E7%BD%B2%E8%87%B3linux) |

OR <a href="https://apps.apple.com/us/app/inkdown/id6451391474"><img src="docs/assets/mac-store.svg" style="width:120px;margin-left:10px"/></a>

> The release time of mac store will be delayed by 1-3 days
>
> 由于工信部要求APP备案原因，中国内地地区暂未上架Mac Store。

---

# Introduction

Inkdown (bluestone) is a Markdown reading, editing, and sharing tool. Almost fully compatible with the [GitHub Flavored Markdown](https://github.github.com/gfm/) standard, while extending the [Mermaid](https://mermaid.js.org/) graphics and [Katex](https://katex.org/) formula, supporting light and dark styles, and somewhat different from other WYSIWYG editors, Inkdown does not pursue complete customization. Its core goal is comfortable reading, smooth editing of Markdown, and document sharing in the simplest way possible.

As a document publisher, markdown source code mode is undoubtedly efficient and free,
but as a note, it is not conducive to reading.
The table element of markdown is not conducive to writing,
and the double-column mode is not conducive to focusing,
so the Inkdown Editor was developed. It combines rich text with markdown editing habits to help you record daily,
and saves it in standard markdown format, which allows your notes to be used anywhere and backed up in any way.

https://github.com/1943time/bluestone/assets/115093678/e01c9d88-a278-4038-b786-7d0ed5d40cbb

![](https://assets.inkdown.me/home/h1.png)

## Features

- The rich text editing mode is used, while also compatible with Markdown syntax conversion and editing habits. When using the search function, Markdown symbols will not be searched.
- Automatically record and clear file history, can be viewed and rolled back at any time.
- Using [shiki](https://github.com/shikijs/shiki) as a code shader to make code highlights more fine-grained and aesthetically pleasing.
- Provides a powerful sharing program, Linux server required [doc](https://doc.bluemd.me/doc/tAfxJPwODVe4i#sharing-service).
- Enhanced table operations, allowing for easy adjustment of the order and quantity of rows and columns in the table, and the ability to wrap within the table.
- Support the editing and display of block and inline [Katex](https://katex.org/) formulas
- Supports [mermaid](https://mermaid.js.org/) graphic syntax.
- The file path link can be automatically reconstructed, and when a file or folder is renamed or moved, the local path of the links or images that the document depends on will be automatically changed.
- You can freely drag and adjust the order of document elements.
- Supports multi tab editing mode
- Support pasting HTML, plain text, and markdown code. When pasting HTML and markdown code, it can be configured to automatically download network images to the local machine and convert paths during pasting.
