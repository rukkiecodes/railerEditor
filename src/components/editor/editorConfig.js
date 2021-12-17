// @ts-nocheck
import store from "../../store"
import router from "../../router"

export default (editor) => {
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
        active: false,
        className: "btn-toggle-borders",
        command: "sw-visibility",
      },
      {
        id: "export",
        className: "btn-open-export",
        command: "export-template",
        context: "export-template",
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: "JSON",
        context: "show-json",
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
    ],
  })

  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  })

  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })

  const exportButton = document.querySelector(".exportButton")
  exportButton.addEventListener("click", () => {
    editor.runCommand("export-template")
  })

  const previewButton = document.querySelector(".previewButton")
  previewButton.addEventListener("click", () => {
    editor.runCommand("preview")
  })

  const rteEl = editor.RichTextEditor.getToolbarEl()
  const order = [0, 1, 2, 3, 4, 14, 15, 9, 10, 11, 12, 13, 5, 6, 7, 8]
  rteEl.firstChild.childNodes.forEach(
    (child, idx) => (child.style.order = order[idx])
  )

  const desktop = document.querySelector(
    ".panel__devices .gjs-pn-buttons .fa-desktop"
  )

  const mobile = document.querySelector(
    ".panel__devices .gjs-pn-buttons .fa-mobile"
  )

  desktop.style.backgroundColor = "#DBDBFD"
  desktop.style.color = "#3D3DF4"
  mobile.style.color = "#999999"
  desktop.style.borderRadius = ".3em"

  editor.on("change:device", () => {
    if (editor.getDevice() == "Desktop") {
      // DESKTOP
      desktop.style.backgroundColor = "#DBDBFD"
      desktop.style.color = "#3D3DF4"
      desktop.style.borderRadius = ".3em"
      desktop.style.transition = ".3s ease-in-out"

      // MOBILE
      mobile.style.backgroundColor = ""
      mobile.style.color = "#999999"
      mobile.style.borderRadius = ""
      mobile.style.transition = ""
    }

    if (editor.getDevice() == "Mobile") {
      // DESKTOP
      desktop.style.backgroundColor = ""
      desktop.style.color = "#999999"
      desktop.style.borderRadius = ""

      // Mobile
      mobile.style.backgroundColor = "#DBDBFD"
      mobile.style.color = "#3D3DF4"
      mobile.style.borderRadius = ".3em"
      mobile.style.transition = ".3s ease-in-out"
    }
  })

  editor.on("load", () => {
    const blocksEl = document.querySelectorAll(".gjs-block-category")
    document.querySelector(".rowContainer").appendChild(blocksEl[3])
    document.querySelector(".componentContainer").appendChild(blocksEl[4])
    document.querySelector(".componentContainer").appendChild(blocksEl[5])
    document.querySelector(".componentContainer").appendChild(blocksEl[6])
    document.querySelector(".componentContainer").appendChild(blocksEl[7])
  })
}
