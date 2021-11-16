import grapesjs from "grapesjs"
import "./assets/grapes.css"

// IMPORT PLUGINGS
import blocksPlugin from "./blocks/basic"
import formPlug from "./blocks/form"
import gjsnavbar from "./blocks/navbar"
import gjscomponentcountdown from "./blocks/countdown"
import typedPlugin from "./blocks/typed"
import grapesjsloryslider from "./blocks/slider"
import grapesjscustomcode from "./blocks/costomCode"
import grapesjsTabs from "./blocks/tabs"
import grapesjstooltip from "./blocks/tooltip"
import grapesjspluginexport from "grapesjs-plugin-export"

import editorConfig from "./editorConfig"
import blocks from "./blocks"

import {
  blockManager,
  layerManager,
  panels,
  selectorManager,
  styleManager,
  traitManager,
  deviceManager,
  mediaCondition,
} from "./managers"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    showOffsets: true,
    fromElement: true,
    noticeOnUnload: false,
    height: "91.9472913616vh",
    width: "auto",
    storageManager: false,

    plugins: [
      blocksPlugin,
      formPlug,
      gjsnavbar,
      gjscomponentcountdown,
      typedPlugin,
      grapesjsloryslider,
      grapesjscustomcode,
      grapesjsTabs,
      grapesjstooltip,
      grapesjspluginexport,
    ],
    pluginsOpts: {
      blocksPlugin: {},
      formPlug: {},
      gjsnavbar: {},
      gjscomponentcountdown: {},
      typedPlugin: {},
      grapesjsloryslider: {},
      grapesjscustomcode: {},
      grapesjsTabs: {},
      grapesjstooltip: {},
      grapesjspluginexport: {},
    },

    blockManager,
    layerManager,
    panels,
    selectorManager,
    styleManager,
    traitManager,
    deviceManager,
    mediaCondition,
  })

  const exportButton = document.querySelector(".exportButton")

  exportButton.addEventListener("click", () => {
    editor.runCommand("gjs-export-zip")
  })

  editorConfig(editor)
  blocks(editor)
}
