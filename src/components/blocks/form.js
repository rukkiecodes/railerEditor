// @ts-nocheck
import form from "../images/form.svg"

export default {
  category: "Form",
  label: `<div class="styleBlock"><img style="width: 90%" src="${form}"><span>Form</span></div>`,
  attributes: { class: "form_block" },
  content: `
      <form class="form">
        <div class="form-group">
          <label class="label">Name</label>
          <input placeholder="Type here your name" class="input" />
        </div>
        <div class="form-group">
          <label class="label">Email</label>
          <input type="email" placeholder="Type here your email" class="input" />
        </div>
        <div class="form-group">
          <label class="label">Gender</label>
          <input type="checkbox" value="M" class="checkbox" />
          <label class="checkbox-label">M</label>
          <input type="checkbox" value="F" class="checkbox" />
          <label class="checkbox-label">F</label>
        </div>
        <div class="form-group">
          <label class="label">Message</label>
          <textarea class="textarea"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="button">Send</button>
        </div>
      </form>
      <style>
        *{
          box-sizing: border-box;
        }
        .form {
          border-radius: 3px;
          padding: 10px 15px;
          background-color: #EDE7F6;
        }

        .input {
          width: 100%;
          height: 3em;
          margin-bottom: 15px;
          padding: 7px 10px;
          border-radius: .4em;
          color: rgba(0, 0, 0, 0.8);
          background-color: #fff;
          border: none;
          outline: none;
          border: 2px solid transparent;
          transition: .2s ease-in-out;
        }

        .input:focus {
          border: 2px solid #4169e15d
        }

        .textarea {
          width: 100%;
          min-height: 150px;
          margin-bottom: 15px;
          padding: 7px 10px;
          border-radius: .4em;
          color: rgba(0, 0, 0, 0.8);
          background-color: #fff;
          border: none;
          outline: none;
          border: 2px solid transparent;
          transition: .2s ease-in-out;
        }

        .label {
          width: 100%;
          display: block;
        }

        .button {
          width: 100%;
          height: 2.6em;
          margin: 15px 0;
          background-color: #4169e1;
          border: none;
          color: #fff;
          border-radius: 2px;
          padding: 7px 10px;
          font-size: 1em;
          cursor: pointer;
        }
      </style>
      `,
}
