// @ts-nocheck
import passwordInput from "../images/passwordInput.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${passwordInput}"><span>Password input</span></div>`,
  attributes: { class: "passwordInput_block" },
  content: `
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  `,
}
