// @ts-nocheck
import store from "../../store"
import router from "../../router"

export default (editor) => {
  editor.Panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  })

  editor.Panels.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons: [
      {
        id: "visibility",
        active: false,
        className: "btn-toggle-borders",
        command: "sw-visibility",
      },
      {
        id: "export",
        className: "btn-open-export",
        command: "export-template",
        context: "export-template",
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: "JSON",
        context: "show-json",
        command(editor) {
          editor.Modal.setTitle("Components JSON")
            .setContent(
              `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
            )
            .open()
        },
      },
    ],
  })

  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  })

  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  })

  const exportButton = document.querySelector(".exportButton")
  exportButton.addEventListener("click", () => {
    editor.runCommand("export-template")
  })

  const previewButton = document.querySelector(".previewButton")
  previewButton.addEventListener("click", () => {
    editor.runCommand("preview")
  })

  const rteEl = editor.RichTextEditor.getToolbarEl()
  const order = [0, 1, 2, 3, 4, 14, 15, 9, 10, 11, 12, 13, 5, 6, 7, 8]
  rteEl.firstChild.childNodes.forEach(
    (child, idx) => (child.style.order = order[idx])
  )

  const desktop = document.querySelector(
    ".panel__devices .gjs-pn-buttons .fa-desktop"
  )

  const mobile = document.querySelector(
    ".panel__devices .gjs-pn-buttons .fa-mobile"
  )

  desktop.style.backgroundColor = "#DBDBFD"
  desktop.style.color = "#3D3DF4"
  mobile.style.color = "#999999"
  desktop.style.borderRadius = ".3em"

  editor.on("change:device", () => {
    if (editor.getDevice() == "Desktop") {
      // DESKTOP
      desktop.style.backgroundColor = "#DBDBFD"
      desktop.style.color = "#3D3DF4"
      desktop.style.borderRadius = ".3em"
      desktop.style.transition = ".3s ease-in-out"

      // MOBILE
      mobile.style.backgroundColor = ""
      mobile.style.color = "#999999"
      mobile.style.borderRadius = ""
      mobile.style.transition = ""
    }

    if (editor.getDevice() == "Mobile") {
      // DESKTOP
      desktop.style.backgroundColor = ""
      desktop.style.color = "#999999"
      desktop.style.borderRadius = ""

      // Mobile
      mobile.style.backgroundColor = "#DBDBFD"
      mobile.style.color = "#3D3DF4"
      mobile.style.borderRadius = ".3em"
      mobile.style.transition = ".3s ease-in-out"
    }
  })

  editor.on("load", () => {
    const blocksEl = document.querySelectorAll(".gjs-block-category")
    document.querySelector(".rowContainer").appendChild(blocksEl[3])
    document.querySelector(".componentContainer").appendChild(blocksEl[4])
    document.querySelector(".componentContainer").appendChild(blocksEl[5])
    document.querySelector(".componentContainer").appendChild(blocksEl[6])
    document.querySelector(".componentContainer").appendChild(blocksEl[7])
    document.querySelector(".componentContainer").appendChild(blocksEl[8])
  })

  editor.Commands.add("show-traits", {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row")
      return row.querySelector(".traits-container")
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = ""
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none"
    },
  })

  editor.DomComponents.addType("input" || "textarea", {
    isComponent: (el) => el.tagName == "INPUT" || "TEXTAREA",
    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          "name", // Same as: { type: 'text', name: 'name' }
          "placeholder",
          {
            type: "select", // Type of the trait
            label: "Type", // The label you will see in Settings
            name: "type", // The name of the attribute/property to use on component
            options: [
              { id: "text", name: "Text" },
              { id: "email", name: "Email" },
              { id: "password", name: "Password" },
              { id: "number", name: "Number" },
            ],
          },
          {
            type: "checkbox",
            name: "required",
          },
        ],
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
        attributes: { type: "text", required: false },
      },
    },
  })

  editor.DomComponents.addType("link", {
    model: {
      defaults: {
        traits: [
          {
            type: "href-next",
            name: "href",
            label: "New href",
          },
        ],
      },
    },
  })

  editor.TraitManager.addType("href-next", {
    noLabel: true,

    // Return a simple HTML string or an HTML element
    createInput({ trait }) {
      // Here we can decide to use properties from the trait
      const traitOpts = trait.get("options") || []
      const options = traitOpts.lenght
        ? traitOpts
        : [
            { id: "url", name: "URL" },
            { id: "email", name: "Email" },
          ]

      // Create a new element container add some content
      const el = document.createElement("div")
      el.innerHTML = `
      <select class="href-next__type">
        ${options
          .map((opt) => `<option value="${opt.id}">${opt.name}</option>`)
          .join("")}
      </select>
      <div class="href-next__url-inputs">
        <input class="href-next__url" placeholder="Insert URL"/>
      </div>
      <div class="href-next__email-inputs">
        <input class="href-next__email" placeholder="Insert email"/>
        <input class="href-next__email-subject" placeholder="Insert subject"/>
      </div>
    `

      // Let's make our content alive
      const inputsUrl = el.querySelector(".href-next__url-inputs")
      const inputsEmail = el.querySelector(".href-next__email-inputs")
      const inputType = el.querySelector(".href-next__type")
      inputType.addEventListener("change", (ev) => {
        switch (ev.target.value) {
          case "url":
            inputsUrl.style.display = ""
            inputsEmail.style.display = "none"
            break
          case "email":
            inputsUrl.style.display = "none"
            inputsEmail.style.display = ""
            break
        }
      })

      return el
    },

    // Update the component based element changes
    onEvent({ elInput, component }) {
      // `elInput` is the result HTMLElement you get from `createInput`
      const inputType = elInput.querySelector(".href-next__type")
      let href = ""

      switch (inputType.value) {
        case "url":
          const valUrl = elInput.querySelector(".href-next__url").value
          href = valUrl
          break
        case "email":
          const valEmail = elInput.querySelector(".href-next__email").value
          const valSubj = elInput.querySelector(".href-next__email-subject")
            .value
          href = `mailto:${valEmail}${valSubj ? `?subject=${valSubj}` : ""}`
          break
      }

      component.addAttributes({ href })
    },

    onUpdate({ elInput, component }) {
      const href = component.getAttributes().href || ""
      const inputType = elInput.querySelector(".href-next__type")
      let type = "url"

      if (href.indexOf("mailto:") === 0) {
        const inputEmail = elInput.querySelector(".href-next__email")
        const inputSubject = elInput.querySelector(".href-next__email-subject")
        const mailTo = href.replace("mailto:", "").split("?")
        const email = mailTo[0]
        const params = (mailTo[1] || "").split("&").reduce((acc, item) => {
          const items = item.split("=")
          acc[items[0]] = items[1]
          return acc
        }, {})
        type = "email"

        inputEmail.value = email || ""
        inputSubject.value = params.subject || ""
      } else {
        elInput.querySelector(".href-next__url").value = href
      }

      inputType.value = type
      inputType.dispatchEvent(new CustomEvent("change"))
    },
  })
}
