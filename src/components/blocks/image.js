// @ts-nocheck
import image from "../images/image.svg"

export default {
  category: "Basic",
  label: `<div class="styleBlock"><img style="width: 90%" src="${image}"><span>Image</span></div>`,
  attributes: { title: "Image" },
  select: true,
  content: { type: "image" },
  activate: true,
  editable: true,
}