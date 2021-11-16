import grapesjs from "grapesjs"
import "./assets/grapes.css"

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
