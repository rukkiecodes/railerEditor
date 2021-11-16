import grapesjs from "grapesjs"
import "./assets/grapes.css"

// IMPORT PLUGINGS
import blocksPlugin from "./blocks/basic"
import formPlug from "./blocks/form"
import gjsnavbar from "./blocks/navbar"

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

    plugins: [blocksPlugin, formPlug, gjsnavbar],
    pluginsOpts: {
      blocksPlugin: {
        /* options */
      },
      formPlug: {
        /* options */
      },
      gjsnavbar: {
        /* options */
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

  editorConfig(editor)
  blocks(editor)
}
