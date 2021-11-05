// @ts-nocheck
import checkboxInput from "../images/checkboxInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${checkboxInput}"><span>Checkbox input</span></div>`,
  attributes: { class: "checkboxInput_block" },
  content: `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  `,
}
