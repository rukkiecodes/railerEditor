// @ts-nocheck
import containerFluid from "../images/containerFluid.svg"

export default {
  category: "Layer",
  label: `<div class="styleBlock"><img style="width: 80%" src="${containerFluid}"><span>Container fluid</span></div>`,
  attributes: { title: "Fluid container" },
  content: `
      <div class="container-fluid"></div>
      <style>
        .container-fluid{
            min-height: 100px
          }
      </style>
    `,
}
