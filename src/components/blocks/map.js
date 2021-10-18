// @ts-nocheck
import map from "../images/map.svg"

export default {
  category: "Basic",
  label: `<div class="styleBlock"><img style="width: 80%" src="${map}"><span>Map</span></div>`,
  attributes: { class: "map_block" },
  content: `
        <iframe frameborder="0" id="i4l8" src="https://maps.google.com/maps?&z=1&t=q&output=embed"></iframe>
        <style>
          #i4l8{
            height:350px;
          }
        </style>
        `,
}
