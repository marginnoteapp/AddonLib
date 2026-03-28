# MNRuntimeLib
![Stable](https://img.shields.io/badge/Status-Stable-0d47a1?style=flat&labelColor=2E72E7)

一个面向MarginNote插件开发的基础库仓库，提供MarginNote对象封装、运行时接入能力以及一组可复用的通用工具。

本项目是在Feliks的MNUtils代码基础上做裁剪、拆分和重组后形成的纯基础层版本，定位为MarginNote插件开发的基础lib。

## Features

- MarginNote对象封装
  包括笔记、评论、文档、笔记本等常见对象的统一访问能力。
- Runtime基础设施
  提供生命周期分发、广播路由注册、资源路径解析和基础WebView壳。
- 通用工具函数
  包含文件读写、URL处理、JSON修复、Markdown转换、压缩解压、图片与PDF转换等底层能力。
- 可复用资源与页面
  内置语言包、JSON Editor页面和所需静态资源，方便插件快速接入。

## Core APIs

### Runtime

运行时核心入口，主要用于注册生命周期和处理插件内路由。

```js
Runtime.registerLifecycle({
  sceneWillConnect() {
    MNUtil.showHUD("Runtime loaded")
  }
})
```

```js
Runtime.registerRoute("ping", () => {
  MNUtil.showHUD("pong")
})
```

### MNUtil

通用工具入口，包含处理文件、资源、窗口、URL和WebView等诸多工具。

```js
let path = Runtime.assets.resolve("assets/dot.png")
let webview = MNUtil.createJsonEditor()
webview.frame = MNUtil.genFrame(20, 80, 800, 600)
MNUtil.studyView.addSubview(webview)
```

### MNNote

MarginNote对象封装入口。

```js
let note = MNNote.new("note-id")
```

## License Statement

本项目相关代码已获得授权，并以MIT License发布。

任何人可以在遵守MIT协议的前提下自由使用、修改、分发和复用本仓库中的代码。

具体许可条款请见[LICENSE](/Users/shenshichao/Downloads/mnutils_v0_2_2_alpha0228/LICENSE)。
