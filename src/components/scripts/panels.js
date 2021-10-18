export default {
  defaults: [
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: `<span class="mdi mdi-desktop-mac"></span>`,
          command: "set-device-desktop",
          active: true,
          togglable: true,
          attributes: {
            title: "Desktop",
            style: "font-size: 1.4em",
          },
        },
        {
          id: "device-tablet",
          label: `<span class="mdi mdi-tablet-ipad"></span>`,
          command: "set-device-tablet",
          togglable: true,
          attributes: {
            title: "Tablet",
            style: "font-size: .9em",
          },
        },
        {
          id: "device-mobile",
          label: `<span class="mdi mdi-cellphone-android"></span>`,
          command: "set-device-mobile",
          togglable: true,
          attributes: {
            title: "Mobile",
            style: "font-size: .8em",
          },
        },
      ],
    },
  ],
}
