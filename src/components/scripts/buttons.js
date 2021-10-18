export default [
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
    command: "show-json",
    attributes: {
      title: "Show JSON",
      class: "panel-buttons",
    },
  },
  {
    id: "undo",
    className: "btn-undo",
    label: `<span class="mdi mdi-undo"></span>`,
    context: "undo",
    command: "undo",
    attributes: {
      title: "Undo",
      class: "panel-buttons",
    },
  },
  {
    id: "redo",
    className: "btn-redo",
    label: `<span class="mdi mdi-redo"></span>`,
    context: "redo",
    command: "redo",
    attributes: {
      title: "Redo",
      class: "panel-buttons",
    },
  },
  {
    id: "fullscreen",
    className: "btn-fullscreen",
    label: `<span class="mdi mdi-fullscreen"></span>`,
    context: "fullscreen",
    command: "fullscreen",
    attributes: {
      title: "Fullscreen",
      class: "panel-buttons",
    },
  },
  {
    id: "codeEditor",
    className: "fa fa-file-code-o",
    command: "open-code",
    togglable: true, //do not close when button is clicked again
    attributes: {
      title: "Open Code",
    },
  },
  {
    id: "clear-canvas",
    className: "btn-clear-canvas",
    label: `<span class="mdi mdi-trash-can"></span>`,
    context: "clear-canvas",
    command: "clear-canvas",
    attributes: {
      title: "Clear canvas",
      class: "panel-buttons",
    },
  },
]
