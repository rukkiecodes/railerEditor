// @ts-nocheck
import checkboxInput from "../images/checkboxInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${checkboxInput}"><span>Checkbox input</span></div>`,
  attributes: { class: "checkboxInput_block" },
  content: `
      <div class="form-group">
        <input type="checkbox" name="checkbox">
        <label for="checkbox">checkbox</label>
      </div>
      <style>
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .form-group {
          display: flex;
          align-items: center;
        }

        label {
          font-size: .9em;
        }
      </style>
      `,
}
