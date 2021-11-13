const blockManager = {
  appendTo: ".blocks-container",
  blocks: [
    {
      id: "section", // id is mandatory
      label: "<b>Section</b>", // You can use HTML/SVG inside labels
      attributes: { class: "gjs-block-section" },
      content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
    },
    {
      id: "text",
      label: "Text",
      content: '<div data-gjs-type="text">Insert your text here</div>',
    },
    {
      id: "image",
      label: "Image",
      // Select the component once it's dropped
      select: true,
      // You can pass components as a JSON instead of a simple HTML string,
      // in this case we also use a defined component type `image`
      content: { type: "image" },
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    },
  ],
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

const mediaCondition = 'min-width'

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
      widthMedia: "",
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
      id: "layers",
      el: ".panel__right",
      // Make the panel resizable
      resizable: {
        maxDim: 450,
        minDim: 300,
        tc: 0,
        cl: 1,
        cr: 0,
        bc: 0,
        keyWidth: "flex-basis",
      },
    },
    {
      id: "panel-switcher",
      el: ".panel__switcher",
      buttons: [
        {
          id: "show-layers",
          active: true,
          label: "Layers",
          command: "show-layers",
          // Once activated disable the possibility to turn it off
          togglable: false,
        },
        {
          id: "show-style",
          active: true,
          label: "Styles",
          command: "show-styles",
          togglable: false,
        },
        {
          id: "show-traits",
          active: true,
          label: "Traits",
          command: "show-traits",
          togglable: false,
        },
        {
          id: "show-blocks",
          active: true,
          label: "Blocks",
          command: "show-blocks",
          togglable: false,
          attributes: {
            class: "block-button"
          }
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: "D",
          command: "set-device-desktop",
          active: true,
          togglable: false,
        },
        {
          id: "device-mobile",
          label: "M",
          command: "set-device-mobile",
          togglable: false,
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
