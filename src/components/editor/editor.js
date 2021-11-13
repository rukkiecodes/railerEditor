import grapesjs from "grapesjs"
import "./assets/grapes.css"
import "grapesjs-component-code-editor"
import "grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css"

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
    height: "94.1vh",
    width: "auto",
    storageManager: false,
    showOffsets: true,
    noticeOnUnload: false,

    plugins: ["grapesjs-component-code-editor"],

    pluginsOpts: {
      "grapesjs-component-code-editor": {
        editJs: true
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
}
