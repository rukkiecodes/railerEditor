const blockManager = {
  appendTo: ".blocks-container",
}

const layerManager = {
  appendTo: ".layers-container",
}

const selectorManager = {
  appendTo: ".styles-container",
}

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
      open: true,
      buildProps: ["width", "min-width", "max-width", "height", "min-height", "max-height", "padding", "margin"],
      properties: [
        {
          type: "integer",
          name: "Width",
          property: "width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Min Width",
          property: "min-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Max Width",
          property: "max-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Height",
          property: "height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Min height",
          property: "min-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Max height",
          property: "max-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Padding",
          property: "padding",
          units: ["px", "%", "em", "rem", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
        {
          type: "integer",
          name: "Margin",
          property: "margin",
          units: ["px", "%", "em", "rem", "mm", "cm"],
          defaults: "auto",
          min: 10,
        },
      ],
    },
    {
      name: "Extra",
      open: true,
      buildProps: ["background-color", "color", "box-shadow", "custom-prop"],
      properties: [
        {
          id: "custom-prop",
          name: "Custom Label",
          property: "font-size",
          type: "select",
          defaults: "32px",
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
          label: `<span>Blocks</span>`,
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
          label: `<span>Style</span>`,
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
          label: `<span>Layers</span>`,
          attributes: {
            title: "Component layers",
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
          attributes: { title: "Desktop" },
        },
        {
          id: "device-mobile",
          command: "set-device-mobile",
          className: "fa fa-mobile",
          attributes: { title: "Mobile" },
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
  deviceManager,
}
