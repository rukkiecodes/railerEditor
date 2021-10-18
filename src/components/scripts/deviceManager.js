export default {
  devices: [
    {
      name: "Desktop",
      width: "", // default size
    },
    {
      name: "tablet",
      width: "620px", // this value will be used on canvas width
      widthMedia: "768px", // this value will be used in CSS @media
    },
    {
      name: "Mobile",
      width: "320px", // this value will be used on canvas width
      widthMedia: "480px", // this value will be used in CSS @media
    },
  ],
}
