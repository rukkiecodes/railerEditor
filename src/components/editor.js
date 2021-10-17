import "grapesjs/dist/css/grapes.min.css"
import grapesjs from "grapesjs"
import editorConfig from "./editorConfig"
import placeholder from "./scripts/placeholder"

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
import fileInput from "./blocks/fileInput"
import radioInput from "./blocks/radioInput"
import checkboxInput from "./blocks/checkboxInput"
import dateInput from "./blocks/dateInput"

export default () => {
  const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: "#gjs",
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: "100%",
    width: "auto",

    // append blocks
    blockManager: {
      appendTo: "#blocks",
    },

    // We define a default panel as a sidebar to contain layers
    panels: {
      defaults: [
        {
          id: "panel-devices",
          el: ".panel__devices",
          buttons: [
            {
              id: "device-desktop",
              label: `<span class="mdi mdi-desktop-mac"></span>`,
              command: "set-device-desktop",
              active: true,
              togglable: false,
              attributes: {
                title: "Desktop",
                style: "font-size: 1.4em",
              },
            },
            {
              id: "device-tablet",
              label: `<span class="mdi mdi-tablet-ipad"></span>`,
              command: "set-device-tablet",
              togglable: false,
              attributes: {
                title: "Tablet",
                style: "font-size: .9em",
              },
            },
            {
              id: "device-mobile",
              label: `<span class="mdi mdi-cellphone-android"></span>`,
              command: "set-device-mobile",
              togglable: false,
              attributes: {
                title: "Mobile",
                style: "font-size: .8em",
              },
            },
          ],
        },
      ],
    },

    // The Selector Manager allows to assign classes and
    // different states (eg. :hover) on components.
    // Generally, it's used in conjunction with Style Manager
    // but it's not mandatory
    selectorManager: {
      appendTo: ".styles-container",
    },
    styleManager: {
      appendTo: ".styles-container",
      sectors: [
        {
          name: "Coloring",
          open: true,
          // Use built-in properties
          buildProps: ["color", "background-color"],
          // Use `properties` to define/override single property
          properties: [],
        },
        {
          name: "Box model",
          open: true,
          // Use built-in properties
          buildProps: ["width", "min-height", "padding", "display"],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: "integer",
              name: "The width", // Label for the property
              property: "width", // CSS property (if buildProps contains it will be extended)
              units: ["px", "%", "pt", "em", "rem", "vh", "vw", "mm", "cm"], // Units, available only for 'integer' types
              defaults: "auto", // Default value
              min: 0, // Min value, available only for 'integer' types
            },
          ],
        },
        {
          name: "Extra",
          open: true,
          buildProps: [
            "background-color",
            "box-shadow",
            "custom-prop",
            "transform",
          ],
          properties: [
            {
              id: "custom-prop",
              name: "Custom Label",
              property: "font-size",
              type: "select",
              defaults: "32px",
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: "12px", name: "Tiny" },
                { value: "18px", name: "Medium" },
                { value: "32px", name: "Big" },
              ],
            },
          ],
        },
      ],
    },

    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "", // default size
        },
        {
          name: "tablet",
          width: "620px", // this value will be used on canvas width
          widthMedia: "768px", // this value will be used in CSS @media
        },
        {
          name: "Mobile",
          width: "320px", // this value will be used on canvas width
          widthMedia: "480px", // this value will be used in CSS @media
        },
      ],
    },

    traitManager: {
      appendTo: ".traits-container",
    },

    // Disable the storage manager for the moment
    storageManager: false,
  })
  editor.addComponents(placeholder)

  // BLOCK MANAGER
  const bm = editor.BlockManager

  // IMPORT BLOCKS
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
  bm.add("nav-extra", navbar)
  bm.add("textInput-extra", textInput)
  bm.add("fileInput-extra", fileInput)
  bm.add("radioInput-extra", radioInput)
  bm.add("checkboxInput-extra", checkboxInput)
  bm.add("dateInput-extra", dateInput)

  editorConfig(editor)
}
