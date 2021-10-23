// @ts-nocheck
import container from "../images/container.svg"

export default {
  category: "Layer",
  label: `<div class="styleBlock"><img style="width: 80%" src="${container}"><span>Container</span></div>`,
  attributes: { title: "Fluid container" },
  content: `
      <div class="container"></div>
      <style>
        .container{
            min-height: 100px
          }
      </style>
    `,
}
