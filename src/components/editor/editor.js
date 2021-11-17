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
      grapesjsrteextensions: {
        fonts: {
          fontColor: ["#fff"],
          hilite: ["#fff"],
          fontSize: true,
        },
        format: {
          heading1: true,
          heading2: true,
          heading3: true,
          heading4: true,
          heading5: true,
          heading6: true,
          paragraph: true,
          quote: true,
          clearFormatting: true,
        },

        subscriptSuperscript: true,
        indentOutdent: true,
        list: true,
        align: true,
        actions: {
          copy: true,
          cut: true,
          paste: true,
          delete: true,
        },
        undoredo: true,
        extra: true,
        darkColorPicker: true,
        maxWidth: "600px",
      },
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
