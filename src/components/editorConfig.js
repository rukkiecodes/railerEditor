// @ts-nocheck
import buttons from "./buttons"

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
      console.log(editor)
    },
  })
  editor.Commands.add("redo", {
    run: (editor) => {
      console.log(editor)
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
      // console.log(editor)
    },
  })
  editor.Commands.add("import", {
    run: (editor) => {
      console.log(editor)
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
}
