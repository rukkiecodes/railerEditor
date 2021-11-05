// @ts-nocheck
import dateInput from "../images/dateInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${dateInput}"><span>Date input</span></div>`,
  attributes: { class: "dateInput_block" },
  content: `
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" name="date" />
      </div>
      <style>
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        label {
          font-size: .9em;
          display: block;
        }
      </style>
      `,
}
