var __mnRuntimeModules = globalThis.__mnRuntimeModules
if (!__mnRuntimeModules) {
  __mnRuntimeModules = {}
  globalThis.__mnRuntimeModules = __mnRuntimeModules
}

if (!__mnRuntimeModules.runtime) {
  JSB.require("runtime")
  __mnRuntimeModules.runtime = true
}
if (!__mnRuntimeModules.mnutils) {
  JSB.require("mnutils")
  __mnRuntimeModules.mnutils = true
}
if (!__mnRuntimeModules.mnnote) {
  JSB.require("mnnote")
  __mnRuntimeModules.mnnote = true
}
if (!__mnRuntimeModules.cryptojs) {
  JSB.require("vendor/CryptoJS")
  __mnRuntimeModules.cryptojs = true
}
if (!__mnRuntimeModules.marked) {
  JSB.require("vendor/marked")
  __mnRuntimeModules.marked = true
}
if (!__mnRuntimeModules.mustache) {
  JSB.require("vendor/mustache")
  __mnRuntimeModules.mustache = true
}
if (!__mnRuntimeModules.segmentit) {
  JSB.require("vendor/segmentit")
  __mnRuntimeModules.segmentit = true
}
if (!__mnRuntimeModules.jsonrepair) {
  JSB.require("vendor/jsonrepair")
  __mnRuntimeModules.jsonrepair = true
}
if (!__mnRuntimeModules.pdfBridgeCore) {
  JSB.require("vendor/pdf-bridge-core")
  __mnRuntimeModules.pdfBridgeCore = true
}
if (!__mnRuntimeModules.pako) {
  JSB.require("vendor/pako")
  __mnRuntimeModules.pako = true
}
if (!__mnRuntimeModules.lzString) {
  JSB.require("vendor/lz-string")
  __mnRuntimeModules.lzString = true
}
if (!__mnRuntimeModules.webviewHost) {
  JSB.require("webview-host")
  __mnRuntimeModules.webviewHost = true
}
if (!__mnRuntimeModules.addon) {
  JSB.require("addon")
  __mnRuntimeModules.addon = true
}
