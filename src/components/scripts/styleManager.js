export default {
  appendTo: ".styles-container",
  sectors: [
    {
      name: "Coloring",
      open: true,
      buildProps: ["color", "background-color"],
      properties: [],
    },
    {
      name: "Box model",
      open: true,
      buildProps: ["width", "min-height", "padding", "display"],
      properties: [
        {
          type: "integer",
          name: "The width", // Label for the property
          property: "width", // CSS property (if buildProps contains it will be extended)
          units: ["px", "%", "pt", "em", "rem", "vh", "vw", "mm", "cm"], // Units, available only for 'integer' types
          defaults: "auto", // Default value
          min: 0, // Min value, available only for 'integer' types
        },
      ],
    },
    {
      name: "components",
      open: true,
      buildProps: [
        "background-color",
        "box-shadow",
        "custom-prop",
        "transform",
      ],
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
