// @ts-nocheck
import form from "../images/form.svg"

export default {
  category: "Components",
  label: `<div class="styleBlock"><img style="width: 80%" src="${form}"><span>Form</span></div>`,
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
          <label class="label">Password</label>
          <input type="password" placeholder="Type here your password" class="input" />
        </div>
        <div class="form-group">
          <label class="label">Gender</label>
          <input type="checkbox" value="M" class="checkbox" />
          <label class="checkbox-label">Male</label>
          <input type="checkbox" value="F" class="checkbox" />
          <label class="checkbox-label">Female</label>
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
        * {
          box-sizing: border-box;
        }

        .form {
          border-radius: .5em;
          padding: 1em;
          background-color: #EDE7F6;
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
          resize: vertical;
        }

        .textarea:focus {
          border: 2px solid #4169e15d
        }


        .label {
          font-size: .9em;
          display: block;
        }

        

        .button {
          width: 100%;
          height: 2.5em;
          margin-top: 1em;
          background-color: #4169e1;
          border: none;
          color: #fff;
          border-radius: .4em;
          font-size: 1em;
          cursor: pointer;
        }
      </style>
      `,
}
