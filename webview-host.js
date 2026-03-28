class RuntimeWebViewHost {
  constructor(options = {}) {
    this.options = options
    this.view = options.view
    this.webview = options.webview
  }

  loadFile(path) {
    const filePath = Runtime.assets.resolve(path)
    this.webview.loadFileURLAllowingReadAccessToURL(
      NSURL.fileURLWithPath(filePath),
      NSURL.fileURLWithPath(Runtime.assets.resolve(""))
    )
  }

  runJavaScript(script) {
    if (!this.webview) {
      throw new Error("RuntimeWebViewHost.runJavaScript called without webview")
    }
    this.webview.stringByEvaluatingJavaScriptFromString(script)
  }
}

Runtime.createWebViewHost = function(options = {}) {
  return new RuntimeWebViewHost(options)
}

globalThis.RuntimeWebViewHost = RuntimeWebViewHost
