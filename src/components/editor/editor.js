import grapesjs from "grapesjs"
import "./assets/grapes.css"
import "grapesjs-preset-webpage"

import editorConfig from "./editorConfig"

import restobar from "./blocks/restobar"
import corporate from "./blocks/corporate"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "100%",
    width: "auto",

    plugins: ["gjs-preset-webpage"],
    pluginsOpts: {
      "gjs-preset-webpage": {
        // options
      },
    },
  })

  const bm = editor.BlockManager

  bm.add("template-restobar", restobar)
  bm.add("template-corporate", corporate)

  editorConfig(editor)
}
