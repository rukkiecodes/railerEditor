// @ts-nocheck
import passwordInput from "../images/passwordInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${passwordInput}"><span>Password input</span></div>`,
  attributes: { class: "passwordInput_block" },
  content: `
    <label for="inputPassword5" class="form-label">Password</label>
    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
    <div id="passwordHelpBlock" class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </div>
  `,
}
