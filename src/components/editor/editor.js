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

import editorConfig from "./editorConfig"
import blocks from "./blocks"

// IMPORT PLACEHOLDER
import placeholder from "./placeholder"

import {
  blockManager,
  layerManager,
  panels,
  selectorManager,
  styleManager,
  deviceManager,
} from "./managers"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "94vh",
    width: "auto",
    storageManager: false,

    blockManager,
    layerManager,
    panels,
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

  editor.addComponents(placeholder)

  // console.log(editor.Canvas.getDocument().querySelector("html"))

  editorConfig(editor)
  blocks(editor)
}
