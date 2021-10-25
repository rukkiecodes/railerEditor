import grapesjs from "grapesjs"
import "./assets/grapes.css"

import editorConfig from "./editorConfig"

// IMPORT MANAGERS
import panels from "./scripts/panels"
import styleManager from "./scripts/styleManager"
import deviceManager from "./scripts/deviceManager"
import canvas from "./scripts/canvas"

// IMPORT BLOCKS
import container from "./blocks/container"
import containerFluid from "./blocks/containerFluid"
import oneColumn from "./blocks/oneColumn"
import twoColumns from "./blocks/twoColumns"
import tripleColumns from "./blocks/tripleColumns"
import twoColumnsThree from "./blocks/twoColumnsThree"
import button from "./blocks/button"
import divide from "./blocks/divide"
import textBlock from "./blocks/textBlock"
import link from "./blocks/link"
import image from "./blocks/image"
import video from "./blocks/video"
import map from "./blocks/map"
import linkBlock from "./blocks/linkBlock"
import quote from "./blocks/quote"
import text from "./blocks/text"
import gridItem from "./blocks/gridItem"
import listItems from "./blocks/listItems"
import form from "./blocks/form"
import navbar from "./blocks/navbar"
import textInput from "./blocks/textInput"
import emailInput from "./blocks/emailInput"
import passwordInput from "./blocks/passwordInput"
import fileInput from "./blocks/fileInput"
import radioInput from "./blocks/radioInput"
import checkboxInput from "./blocks/checkboxInput"
import dateInput from "./blocks/dateInput"
import datetimeLocal from "./blocks/datetimeLocal"

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "100%",
    width: "auto",

    blockManager: {
      appendTo: "#blocks",
    },

    panels,
    styleManager,
    deviceManager,
    canvas,

    selectorManager: {
      appendTo: ".styles-container",
    },

    traitManager: {
      appendTo: ".traits-container",
    },

    storageManager: false,
  })

  // BLOCK MANAGER
  const bm = editor.BlockManager

  // IMPORT BLOCKS
  bm.add("container", container)
  bm.add("containerFluid", containerFluid)
  bm.add("one-column", oneColumn)
  bm.add("two-columns", twoColumns)
  bm.add("three-columns", tripleColumns)
  bm.add("two-columns-3", twoColumnsThree)
  bm.add("button-block", button)
  bm.add("divide-block", divide)
  bm.add("text-block", textBlock)
  bm.add("link", link)
  bm.add("image-block", image)
  bm.add("video-block", video)
  bm.add("map-block", map)
  bm.add("link-block", linkBlock)
  bm.add("quote", quote)
  bm.add("text-basic", text)
  bm.add("gridItem-basic", gridItem)
  bm.add("listItems-basic", listItems)
  bm.add("form-form", form)
  bm.add("nav-components", navbar)
  bm.add("textInput-components", textInput)
  bm.add("emailInput-components", emailInput)
  bm.add("passwordInput-components", passwordInput)
  bm.add("fileInput-components", fileInput)
  bm.add("radioInput-components", radioInput)
  bm.add("checkboxInput-components", checkboxInput)
  bm.add("dateInput-components", dateInput)
  bm.add("datetimeLocal-components", datetimeLocal)

  // PREVIEW DOCUMENT
  const previewButton = document.querySelector(".previewButton")
  previewButton.addEventListener("click", () => {
    editor.runCommand("previewDesign")
  })

  editorConfig(editor)
}
