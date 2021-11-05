import grapesjs from "grapesjs"
import "./assets/grapes.css"
import "grapesjs-preset-webpage"

import editorConfig from "./editorConfig"

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

  editorConfig(editor)
}
