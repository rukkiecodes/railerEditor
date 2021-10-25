// @ts-nocheck
import radioInput from "../images/radioInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${radioInput}"><span>Radio input</span></div>`,
  attributes: { class: "radioInput_block" },
  content: `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Default radio
      </label>
    </div>
  `,
}
