import "grapesjs/dist/css/grapes.min.css"
import grapesjs from "grapesjs"
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
              id: "device-iPad",
              label: `<span class="mdi mdi-tablet-ipad"></span>`,
              command: "set-device-iPad",
              togglable: false,
              attributes: {
                title: "iPad",
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
          name: "Coloring",
          open: false,
          // Use built-in properties
          buildProps: ["color", "background-color"],
          // Use `properties` to define/override single property
          properties: [],
        },
        {
          name: "Extra",
          open: false,
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
          name: "Ipad",
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

  editor.Panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  })

  editor.Panels.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons: [
      {
        id: "visibility",
        active: false, // active by default
        className: "btn-toggle-borders",
        label: `<span class="mdi mdi-border-all-variant"></span>`,
        command: "sw-visibility", // Built-in command
        attributes: {
          title: "Border visibility",
          class: "panel-buttons",
        },
      },
      {
        id: "preview",
        className: "btn-preview",
        label: `<span class="mdi mdi-eye-outline"></span>`,
        context: "preview",
        attributes: {
          title: "Preview",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
      {
        id: "export",
        className: "btn-open-export",
        label: `<span class="mdi mdi-code-tags"></span>`,
        command: "export-template",
        context: "export-template", // For grouping context of buttons from the same panel
        attributes: {
          title: "Export template",
          class: "panel-buttons",
        },
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: `<span class="mdi mdi-code-json"></span>`,
        context: "show-json",
        attributes: {
          title: "Show JSON",
          class: "panel-buttons",
        },
        command(editor) {
          editor.Modal.setTitle("Components JSON")
            .setContent(
              `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
            )
            .open()
        },
      },
      {
        id: "undo",
        className: "btn-undo",
        label: `<span class="mdi mdi-undo"></span>`,
        context: "undo",
        attributes: {
          title: "Undo",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
      {
        id: "redo",
        className: "btn-redo",
        label: `<span class="mdi mdi-redo"></span>`,
        context: "redo",
        attributes: {
          title: "Redo",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
      {
        id: "fullscreen",
        className: "btn-fullscreen",
        label: `<span class="mdi mdi-fullscreen"></span>`,
        context: "fullscreen",
        attributes: {
          title: "Fullscreen",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
      {
        id: "import",
        className: "btn-import",
        label: `<span class="mdi mdi-download"></span>`,
        context: "import",
        attributes: {
          title: "Import",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
      {
        id: "clear-canvas",
        className: "btn-clear-canvas",
        label: `<span class="mdi mdi-trash-can"></span>`,
        context: "clear-canvas",
        attributes: {
          title: "Clear canvas",
          class: "panel-buttons",
        },
        command(editor) {
          console.log(editor)
        },
      },
    ],
  })

  // Commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  })
  editor.Commands.add("set-device-iPad", {
    run: (editor) => editor.setDevice("Ipad"),
  })
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })
}
