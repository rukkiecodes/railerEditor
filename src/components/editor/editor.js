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
import "./assets/grapesjs-rte-extensions.css"
import grapesjsstylegradient from "grapesjs-style-gradient"
import styleFilter from "grapesjs-style-filter"
import grapesjsstylebg from "grapesjs-style-bg"
import "grapick/dist/grapick.min.css"
import grapesjsTouch from "grapesjs-touch"
import tUIImageEditor from "grapesjs-tui-image-editor"

import editorConfig from "./editorConfig"
import blocks from "./blocks"

// IMPORT PLACEHOLDER
import placeholder from "./placeholder"

import {
  blockManager,
  panels,
  selectorManager,
  styleManager,
  deviceManager,
  traitManager
} from "./managers"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "94vh",
    width: "auto",
    storageManager: false,

    blockManager,
    panels,
    selectorManager,
    styleManager,
    deviceManager,
    traitManager,

    canvas: {
      styles: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
        "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
      ],
      scripts: [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
        "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
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
      tUIImageEditor,
    ],
    pluginsOpts: {
      grapesjsstylegradient: {},
      styleFilter: {},
      grapesjsstylebg: {},
    },
  })

  editor.I18n.addMessages({
    en: {
      styleManager: {
        properties: {
          "background-repeat": "Repeat",
          "background-position": "Position",
          "background-attachment": "Attachment",
          "background-size": "Size",
        },
      },
    },
  })

  editor.addComponents(placeholder)

  // console.log(editor.Canvas.getDocument().querySelector("html"))

  editorConfig(editor)
  blocks(editor)
}
