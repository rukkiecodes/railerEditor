export default {
  state: {
    drawer: true,
    dashRoutes: [
      {
        icon: "mdi-view-dashboard",
        title: "Template",
        route: "/dashboard/template",
      },
      {
        icon: "mdi-content-copy",
        title: "Copy",
        route: "/dashboard/copy",
      },
      {
        icon: "mdi-form-textarea",
        title: "Quick text",
        route: "/dashboard/quickText",
      },
      {
        icon: "mdi-microsoft-word",
        title: "Quick office",
        route: "/dashboard/quickOffice",
      },
      {
        icon: "mdi-view-compact",
        title: "Email editor",
        route: "/dashboard/emailEditor",
      },
      {
        icon: "mdi-code-json",
        title: "Compose template",
        route: "/dashboard/rawEmailEditor",
      },
    ],
  },
  getters: {
    dashRoutes: (state) => state.dashRoutes,
  },
  mutations: {},
  actions: {},
};
