// @ts-nocheck
import store from "../store"
import router from "../router"
import buttons from "./scripts/buttons"

export default (editor) => {
  editor.Panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  })

  editor.Panels.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons,
  })

  // Commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  })
  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("tablet"),
  })
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })
  editor.Commands.add("show-json", {
    run: (editor) => {
      editor.Modal.setTitle("Components JSON")
        .setContent(
          `<textarea style="width:100%; height: 250px; color: #fff">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
        )
        .open()
    },
  })
  editor.Commands.add("undo", {
    run: (editor) => {
      editor.UndoManager.undo(1)
    },
  })
  editor.Commands.add("redo", {
    run: (editor) => {
      editor.UndoManager.redo(1)
    },
  })
  editor.Commands.add("fullscreen", {
    run: (editor) => {
      const elem = document.querySelector(".editorContainer")
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen()
      }
    },
  })
  editor.Commands.add("open-code", {
    run: (editor) => {
      store.state.editor.dialog = true
    },
  })
  editor.Commands.add("clear-canvas", {
    run: (editor) => {
      const verify = confirm(
        "Clearing the cancas will delete all changes made. Wand to proceed?"
      )
      if (verify) {
        editor.DomComponents.clear()
        editor.CssComposer.clear()
      }
    },
  })
  editor.Commands.add("previewDesign", {
    run: (editor) => {
      const canvasDocument = editor.Canvas.getDocument()
      store.state.editor.html = canvasDocument.querySelector("html")
      router.push("/preview")
    },
  })
  editor.Commands.add("show-styles", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row")
    },
    getStyleEl(row) {
      return row.querySelector(".styles-container")
    },

    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor))
      smEl.style.display = ""
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor))
      smEl.style.display = "none"
    },
  })
  editor.Commands.add("show-traits", {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row")
      return row.querySelector(".traits-container")
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = ""
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none"
    },
  })

  editor.on("component:selected", () => {
    const panel__right = document.querySelector(".panel__right")
    const styleButton = document.querySelector(".style-button")
    panel__right.style.display = "initial"
    styleButton.click()
  })
  editor.on("component:deselected", () => {
    const panel__right = document.querySelector(".panel__right")
    panel__right.style.display = "none"
  })
}
