const blockManager = {
  appendTo: ".blocks-container",
}

const layerManager = {
  // appendTo: ".layers-container",
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
      name: "General",
      open: true,
      buildProps: ["display", "position", "top", "right", "left", "bottom"],
      properties: [{ property: "position", type: "select" }],
    },
    {
      name: "Dimension",
      open: true,
      buildProps: [
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "padding",
      ],
      properties: [
        {
          type: "integer",
          name: "Width",
          property: "width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Min width",
          property: "min-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Max width",
          property: "max-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Height",
          property: "height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Min height",
          property: "min-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Max height",
          property: "max-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
      ],
    },
    {
      name: "Typography",
      open: true,
      buildProps: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "float",
        "text-align",
        "text-decoration",
        "text-shadow",
      ],
      properties: [
        {
          property: "text-align",
          list: [
            { value: "left", className: "fa fa-align-left" },
            { value: "center", className: "fa fa-align-center" },
            { value: "right", className: "fa fa-align-right" },
            { value: "justify", className: "fa fa-align-justify" },
          ],
        },

        {
          name: "Alignment",
          property: "float",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", className: "fa fa-times" },
            { value: "left", className: "fa fa-align-left" },
            { value: "right", className: "fa fa-align-right" },
          ],
        },

        {
          property: "text-decoration",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", name: "None", className: "fa fa-times" },
            {
              value: "underline",
              name: "underline",
              className: "fa fa-underline",
            },
            {
              value: "line-through",
              name: "Line-through",
              className: "fa fa-strikethrough",
            },
          ],
        },

        {
          property: "text-shadow",
          properties: [
            { name: "X position", property: "text-shadow-h" },
            { name: "Y position", property: "text-shadow-v" },
            { name: "Blur", property: "text-shadow-blur" },
            { name: "Color", property: "text-shadow-color" },
          ],
        },
      ],
    },
    {
      name: "Decorations",
      open: true,
      buildProps: [
        "opacity",
        "border-radius",
        "border",
        "box-shadow",
        "background-bg",
      ],
      properties: [
        {
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
        {
          property: "border-radius",
          properties: [
            { name: "Top", property: "border-top-left-radius" },
            { name: "Right", property: "border-top-right-radius" },
            { name: "Bottom", property: "border-bottom-left-radius" },
            { name: "Left", property: "border-bottom-right-radius" },
          ],
        },
        {
          property: "box-shadow",
          properties: [
            { name: "X position", property: "box-shadow-h" },
            { name: "Y position", property: "box-shadow-v" },
            { name: "Blur", property: "box-shadow-blur" },
            { name: "Spread", property: "box-shadow-spread" },
            { name: "Color", property: "box-shadow-color" },
            { name: "Shadow type", property: "box-shadow-type" },
          ],
        },
        {
          id: "background-bg",
          property: "background",
          type: "bg",
        },
      ],
    },
    {
      name: "Extra",
      open: true,
      buildProps: ["transition", "perspective", "transform"],
      properties: [
        {
          property: "transition",
          properties: [
            { name: "Property", property: "transition-property" },
            { name: "Duration", property: "transition-duration" },
            { name: "Easing", property: "transition-timing-function" },
          ],
        },
        {
          property: "transform",
          properties: [
            { name: "Rotate X", property: "transform-rotate-x" },
            { name: "Rotate Y", property: "transform-rotate-y" },
            { name: "Rotate Z", property: "transform-rotate-z" },
            { name: "Scale X", property: "transform-scale-x" },
            { name: "Scale Y", property: "transform-scale-y" },
            { name: "Scale Z", property: "transform-scale-z" },
          ],
        },
      ],
    },
    {
      name: "Flex",
      open: true,
      properties: [
        {
          name: "Flex Container",
          property: "display",
          type: "select",
          defaults: "block",
          list: [
            { value: "block", name: "Disable" },
            { value: "flex", name: "Enable" },
          ],
        },
        {
          name: "Flex Parent",
          property: "label-parent-flex",
          type: "integer",
        },

        {
          name: "Direction",
          property: "flex-direction",
          type: "radio",
          defaults: "row",
          list: [
            {
              value: "row",
              name: "Row",
              className: "icons-flex icon-dir-row",
              title: "Row",
            },
            {
              value: "row-reverse",
              name: "Row reverse",
              className: "icons-flex icon-dir-row-rev",
              title: "Row reverse",
            },
            {
              value: "column",
              name: "Column",
              title: "Column",
              className: "icons-flex icon-dir-col",
            },
            {
              value: "column-reverse",
              name: "Column reverse",
              title: "Column reverse",
              className: "icons-flex icon-dir-col-rev",
            },
          ],
        },

        {
          name: "Justify",
          property: "justify-content",
          type: "radio",
          defaults: "flex-start",
          list: [
            {
              value: "flex-start",
              className: "icons-flex icon-just-start",
              title: "Start",
            },
            {
              value: "flex-end",
              title: "End",
              className: "icons-flex icon-just-end",
            },
            {
              value: "space-between",
              title: "Space between",
              className: "icons-flex icon-just-sp-bet",
            },
            {
              value: "space-around",
              title: "Space around",
              className: "icons-flex icon-just-sp-ar",
            },
            {
              value: "center",
              title: "Center",
              className: "icons-flex icon-just-sp-cent",
            },
          ],
        },

        {
          name: "Align",
          property: "align-items",
          type: "radio",
          defaults: "center",
          list: [
            {
              value: "flex-start",
              title: "Start",
              className: "icons-flex icon-al-start",
            },
            {
              value: "flex-end",
              title: "End",
              className: "icons-flex icon-al-end",
            },
            {
              value: "stretch",
              title: "Stretch",
              className: "icons-flex icon-al-str",
            },
            {
              value: "center",
              title: "Center",
              className: "icons-flex icon-al-center",
            },
          ],
        },
        {
          name: "Flex Children",
          property: "label-parent-flex",
          type: "integer",
        },

        {
          name: "Order",
          property: "order",
          type: "integer",
          defaults: 0,
          min: 0,
        },
        {
          name: "Flex",
          property: "flex",
          type: "composite",
          properties: [
            {
              name: "Grow",
              property: "flex-grow",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Shrink",
              property: "flex-shrink",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Basis",
              property: "flex-basis",
              type: "integer",
              units: ["px", "%", ""],
              unit: "",
              defaults: "auto",
            },
          ],
        },

        {
          name: "Align",
          property: "align-self",
          type: "radio",
          defaults: "auto",
          list: [
            {
              value: "auto",
              name: "Auto",
            },
            {
              value: "flex-start",
              title: "Start",
              className: "icons-flex icon-al-start",
            },
            {
              value: "flex-end",
              title: "End",
              className: "icons-flex icon-al-end",
            },
            {
              value: "stretch",
              title: "Stretch",
              className: "icons-flex icon-al-str",
            },
            {
              value: "center",
              title: "Center",
              className: "icons-flex icon-al-center",
            },
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
          active: false,
          command: "sw-visibility",
          context: "sw-visibility",
          className: "fa fa-square-o",
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
