const getRuntimeAddon = () => self

var RuntimeAddon = JSB.defineClass("RuntimeAddon : JSExtension", {
  sceneWillConnect: async function() {
    Runtime.emitLifecycle("sceneWillConnect", getRuntimeAddon())
  },
  sceneDidDisconnect: function() {
    Runtime.emitLifecycle("sceneDidDisconnect", getRuntimeAddon())
  },
  notebookWillOpen: function(notebookId) {
    self.notebookid = notebookId
    Runtime.emitLifecycle("notebookWillOpen", notebookId, getRuntimeAddon())
  },
  notebookWillClose: function(notebookId) {
    Runtime.emitLifecycle("notebookWillClose", notebookId, getRuntimeAddon())
  },
  documentDidOpen: function(documentController) {
    Runtime.emitLifecycle("documentDidOpen", documentController, getRuntimeAddon())
  },
  documentWillClose: function(documentController) {
    Runtime.emitLifecycle("documentWillClose", documentController, getRuntimeAddon())
  },
  controllerWillLayoutSubviews: function(controller) {
    Runtime.emitLifecycle("controllerWillLayoutSubviews", controller, getRuntimeAddon())
  },
  onAddonBroadcast: function(notification) {
    let url = `marginnote4app://addon/${notification.userInfo.message}`
    let parsed = MNUtil.parseURL(url)
    let routeName = parsed.pathComponents[0]
    if (!routeName) {
      return
    }
    if (routeName in Runtime.routeHandlers) {
      return Runtime.handleRoute(routeName, parsed, notification, getRuntimeAddon())
    }
  },
  queryAddonCommandStatus: function() {
    return Runtime.emitLifecycle("queryAddonCommandStatus", getRuntimeAddon()).find(Boolean)
  }
}, {
  addonDidConnect: function() {
    Runtime.emitLifecycle("addonDidConnect", getRuntimeAddon())
  },
  addonWillDisconnect: function() {
    Runtime.emitLifecycle("addonWillDisconnect", getRuntimeAddon())
  },
  applicationWillEnterForeground: function() {
    Runtime.emitLifecycle("applicationWillEnterForeground", getRuntimeAddon())
  },
  applicationDidEnterBackground: function() {
    Runtime.emitLifecycle("applicationDidEnterBackground", getRuntimeAddon())
  }
})

JSB.newAddon = function(mainPath) {
  Runtime.init(mainPath)
  Locale.init(mainPath)
  MNUtil.init(mainPath)
  return RuntimeAddon
}
