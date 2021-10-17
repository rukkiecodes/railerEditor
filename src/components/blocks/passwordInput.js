// @ts-nocheck
import passwordInput from "../images/passwordInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${passwordInput}"><span>Password input</span></div>`,
  attributes: { class: "passwordInput_block" },
  content: `
      <div class="form-group">
        <label for="password" class="label">Password</label>
        <input type="password" class="input" name="email" placeholder="Password input" />
      </div>
      <style>
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .input {
          width: 100%;
          height: 3em;
          margin-bottom: 1.5em;
          padding: 7px 10px;
          border-radius: .4em;
          color: rgba(0, 0, 0, 0.8);
          background-color: #fff;
          outline: none;
          border: 2px solid transparent;
          transition: .2s ease-in-out;
        }

        .input:focus {
          border: 2px solid #4169e15d
        }

        .label {
          font-size: .9em;
          display: block;
        }
      </style>
      `,
}
