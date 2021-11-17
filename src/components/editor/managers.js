const blockManager = {
  appendTo: ".blocks-container",
}

const layerManager = {
  appendTo: ".layers-container",
}

const selectorManager = {
  appendTo: ".styles-container",
}

const traitManager = {
  appendTo: ".traits-container",
}

const mediaCondition = "min-width"

const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "",
      widthMedia: "1024",
    },
    {
      name: "Mobile",
      width: "320",
      widthMedia: "320",
    },
  ],
}

const styleManager = {
  appendTo: ".styles-container",
  sectors: [
    {
      name: "Dimension",
      open: false,
      // Use built-in properties
      buildProps: ["width", "min-height", "padding"],
      // Use `properties` to define/override single property
      properties: [
        {
          // Type of the input,
          // options: integer | radio | select | color | slider | file | composite | stack
          type: "integer",
          name: "The width", // Label for the property
          property: "width", // CSS property (if buildProps contains it will be extended)
          units: ["px", "%"], // Units, available only for 'integer' types
          defaults: "auto", // Default value
          min: 0, // Min value, available only for 'integer' types
        },
      ],
    },
    {
      name: "Extra",
      open: false,
      buildProps: ["background-color", "box-shadow", "custom-prop"],
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
}

const panels = {
  defaults: [
    {
      id: "panel-right",
      el: ".panel__right",
    },
    {
      id: "panel-switcher",
      el: ".panel__switcher",
      buttons: [
        {
          id: "show-blocks",
          active: true,
          togglable: false,
          command: "show-blocks",
          className: "fa fa-th-large",
          attributes: {
            class: "block-button",
            title: "Component blocks",
          },
        },
        {
          id: "show-style",
          active: true,
          togglable: false,
          command: "show-styles",
          className: "fa fa-paint-brush",
          attributes: {
            title: "Component style",
          },
        },
        {
          id: "show-layers",
          active: true,
          togglable: false,
          command: "show-layers",
          className: "fa fa-bars",
          attributes: {
            title: "Component layers",
          },
        },
        {
          id: "show-traits",
          active: true,
          togglable: false,
          className: "fa fa-cog",
          command: "show-traits",
          attributes: {
            title: "Component traits",
          },
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          active: true,
          id: "device-desktop",
          command: "set-device-desktop",
          className: "fa fa-desktop",
        },
        {
          id: "device-mobile",
          command: "set-device-mobile",
          className: "fa fa-mobile",
        },
      ],
    },
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "sw-visibility",
          active: true,
          command: "sw-visibility",
          context: "sw-visibility",
          className: "fa fa-square-o",
        },
        {
          id: "preview",
          context: "preview",
          command: (e) => e.runCommand("preview"),
          className: "fa fa-eye",
        },
        {
          id: "fullscreen",
          command: "fullscreen",
          context: "fullscreen",
          className: "fa fa-arrows-alt",
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: (e) => e.runCommand("core:undo"),
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: (e) => e.runCommand("core:redo"),
        },
        {
          id: "canvas-clear",
          className: "fa fa-trash",
          command: (e) => {
            const confirmDelete = confirm("Are you sure to clean the canvas?")
            if (confirmDelete) e.runCommand("core:canvas-clear")
          },
        },
        {
          attributes: {
            title: "Toggle Rulers",
          },
          label: `<svg width="18" viewBox="0 0 16 16"><path d="M0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8z"/><path d="M4 3h8a1 1 0 0 1 1 1v2.5h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5h1V4a1 1 0 0 1 1-1zM3 9.5H2V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5h-1V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/></svg>`,
          command: "ruler-visibility",
          id: "ruler-visibility",
        },
      ],
    },
  ],
}

module.exports = {
  blockManager,
  layerManager,
  panels,
  selectorManager,
  styleManager,
  traitManager,
  deviceManager,
  mediaCondition,
}
