import grapesjs from "grapesjs"
import "./assets/grapes.css"

import editorConfig from "./editorConfig"
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
    fromElement: true,
    height: "300px",
    width: "auto",
    storageManager: false,
    panels: { defaults: [] },

    blockManager,
    layerManager,
    // @ts-ignore
    panels,
    selectorManager,
    styleManager,
    traitManager,
    deviceManager,
    mediaCondition,
  })

  editorConfig(editor)
}
