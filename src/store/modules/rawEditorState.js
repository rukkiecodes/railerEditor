export default {
  state: {
    dialog: false,
    theme: "",
    color: "",
    runDialog: false,
    rawHTML: `<h1>Hello</h1>`,
  },
  mutations: {
    getTheme: (state) => {
      setInterval(() => {
        state.theme = localStorage.getItem("railerEditorTHeme");
        state.color = localStorage.getItem("railerEditorColor");
      }, 1000);
    },
  },
  actions: {
    getTheme({ commit }) {
      commit("getTheme");
    },
  },
};
