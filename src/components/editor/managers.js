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
      name: "Tab",
      width: "600",
      widthMedia: "600",
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
      id: "layers",
      el: ".panel__right",
    },
    {
      id: "panel-switcher",
      el: ".panel__switcher",
      buttons: [
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
          id: "show-traits",
          active: true,
          togglable: false,
          className: "fa fa-cog",
          command: "show-traits",
          attributes: {
            title: "Component traits",
          },
        },
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
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          active: 1,
          id: "device-desktop",
          command: "set-device-desktop",
          className: "fa fa-desktop",
        },
        {
          id: "device-tab",
          command: "set-device-tab",
          className: "fa fa-tablet",
        },
        {
          id: "device-mobile",
          command: "set-device-mobile",
          className: "fa fa-mobile",
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
