// @ts-nocheck
import fileInput from "../images/fileInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${fileInput}"><span>File input</span></div>`,
  attributes: { class: "fileInput_block" },
  content: `
      <div class="form-group">
        <label>Label</label>
        <input type="file" placeholder="Input" />
      </div>
      <style>
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        input {
          width: 100%;
          height: 3em;
          margin-bottom: 1.5em;
          padding: 7px 10px;
          border-radius: .4em;
          color: rgba(0, 0, 0, 0.8);
          background-color: #fff;
          outline: none;
          border: 2px solid rgba(0,0,0,0.4);
          transition: .2s ease-in-out;
        }

        input:focus {
          border: 2px solid #4169e15d
        }


        label {
          font-size: .9em;
          display: block;
        }
      </style>
      `,
}