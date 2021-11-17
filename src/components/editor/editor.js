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
import grapesjsrteextensions from "grapesjs-rte-extensions"
import "grapesjs-rte-extensions/dist/grapesjs-rte-extensions.min.css"

import grapesjsrulers from "grapesjs-rulers"
import "grapesjs-rulers/dist/grapesjs-rulers.min.css"

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
    storageManager: {
      id: "gjs-",
      type: "local",
      autosave: true,
      autoload: true,
      stepsBeforeSave: 1,
    },

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
      grapesjsrteextensions,
      grapesjsrulers,
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
      grapesjsrteextensions: {},
      grapesjsrulers: {},
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

  const rteEl = editor.RichTextEditor.getToolbarEl()
  const order = [0, 1, 2, 3, 4, 14, 15, 9, 10, 11, 12, 13, 5, 6, 7, 8]
  rteEl.firstChild.childNodes.forEach(
    (child, idx) => (child.style.order = order[idx])
  )

  editorConfig(editor)
  blocks(editor)
}
