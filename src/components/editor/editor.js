import grapesjs from "grapesjs"
import "./assets/grapes.css"

// IMPORT PLUGINGS
import blocksPlugin from "./blocks/basic"
import gjscomponentcountdown from "./blocks/countdown"
import typedPlugin from "./blocks/typed"
import grapesjscustomcode from "./blocks/costomCode"
import grapesjsTabs from "./blocks/tabs"
import grapesjstooltip from "./blocks/tooltip"
import grapesjspluginexport from "grapesjs-plugin-export"
import grapesjsrteextensions from "grapesjs-rte-extensions"
import "grapesjs-rte-extensions/dist/grapesjs-rte-extensions.min.css"
import "grapesjs-rulers/dist/grapesjs-rulers.min.css"
import grapesjsstylegradient from "grapesjs-style-gradient"
import styleFilter from "grapesjs-style-filter"
import grapesjsstylebg from "grapesjs-style-bg"
import "grapick/dist/grapick.min.css"
import grapesjsTouch from "grapesjs-touch"
import grapesjsparserpostcss from "grapesjs-parser-postcss"
import grapesjsplugintoolbox from "grapesjs-plugin-toolbox"
import "./grapesjs-plugin-toolbox.css"

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
} from "./managers"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "91.9472913616vh",
    width: "auto",
    storageManager: false,

    blockManager,
    layerManager,
    panels,
    traitManager,
    selectorManager,
    styleManager,
    deviceManager,

    canvas: {
      styles: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      ],
      scripts: [
        "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
      ],
    },

    plugins: [
      blocksPlugin,
      gjscomponentcountdown,
      typedPlugin,
      grapesjscustomcode,
      grapesjsTabs,
      grapesjstooltip,
      grapesjspluginexport,
      grapesjsrteextensions,
      grapesjsstylegradient,
      styleFilter,
      grapesjsstylebg,
      grapesjsTouch,
    ],
    pluginsOpts: {
      grapesjsstylegradient: {},
      styleFilter: {},
      grapesjsstylebg: {},
    },
  })

  const exportButton = document.querySelector(".exportButton")

  exportButton.addEventListener("click", () => {
    editor.runCommand("export-template")
  })

  const rteEl = editor.RichTextEditor.getToolbarEl()
  const order = [0, 1, 2, 3, 4, 14, 15, 9, 10, 11, 12, 13, 5, 6, 7, 8]
  rteEl.firstChild.childNodes.forEach(
    (child, idx) => (child.style.order = order[idx])
  )

  editorConfig(editor)
  blocks(editor)
}
