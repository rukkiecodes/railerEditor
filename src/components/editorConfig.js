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
  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("tablet"),
  })
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })
}
