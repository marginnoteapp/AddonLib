const getRuntimeAddon = () => self

var RuntimeAddon = JSB.defineClass("RuntimeAddon : JSExtension", {
  sceneWillConnect: async function() {
    MNUtil.addObserverForAddonBroadcast(self, 'onAddonBroadcast:')
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
  /**
   * 
   * @param {{userInfo:{message:string},window:UIWindow,name:string}} notification
   * @returns 
   */
  onAddonBroadcast: async function(notification) {
    let url = `marginnote4app://addon/${notification.userInfo.message}`
    let parsed = MNUtil.parseURL(url)
    // console.log(parsed)
    let routeName = parsed.pathComponents[0]
    if (!routeName) {
      return
    }
    if (routeName === "installAddon") {
      let addURL = parsed.params.url
      let addonId = parsed.params.id
      let addonName = parsed.params.name??addonId
      let addonNameString = addonName ? ("\n\n"+addonName) : ""
      if (addURL && addURL.endsWith(".mnaddon")) {
        let confirmed = await MNUtil.confirm("MN Utils",Locale.at("confirmInstallAddon")+addonNameString)
        if (!confirmed) {
          return
        }
        let res = await MNUtil.installAddonFromURL(addURL, addonId)
        if (res.success) {
          MNUtil.alert(Locale.at("installSuccess"),Locale.at("pleaseRestartMNManually"))
        }else{
          MNUtil.alert(Locale.at("installFailed"),res.error)
        }
      }else{
        MNUtil.alert(Locale.at("installFailed"),Locale.at("invalidURL"))
      }
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
