// @ts-nocheck
import datetimeLocal from "../images/datetimeLocal.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${datetimeLocal}"><span>date&time input</span></div>`,
  attributes: { class: "datetimeLocal_block" },
  content: `
      <div class="form-group">
        <label for="datetimeLocal">datetime local</label>
        <input type="datetime-local" name="datetimeLocal" />
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
