// @ts-nocheck
import video from "../images/video.svg"

export default {
  category: 'Basic',
  label: `<div class="styleBlock"><img style="width: 90%" src="${video}"><span>Video</span></div>`,
  attributes: { class: 'image_block' },
  select: false,
  content: { type: 'video' },
  activate: false,
  editable: true,
}