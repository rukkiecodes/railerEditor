// @ts-nocheck
import radioInput from "../images/radioInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${radioInput}"><span>Radio input</span></div>`,
  attributes: { class: "radioInput_block" },
  content: `
      <div class="form-group">
        <input type="radio" />
        <label>Label</label>
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
      </style>
      `,
}
