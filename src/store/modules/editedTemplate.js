import router from "../../router"
import VueCookie from "vue-cookie";

export default {
  state: {
    dialog: false,
    html: localStorage.getItem("#gjshtml"),
    editedTemplateTemplate: [],
  },
  getters: {
    editedTemplateTemplate: (state) => state.editedTemplateTemplate,
  },
  mutations: {
    doneEditing: (state) => {
      const editorsHtml = localStorage.getItem("#gjshtml");
      const category = VueCookie.get("railer selected template category");
      const html = localStorage.getItem("railer selected template html");
      const image = VueCookie.get("railer selected template image");

      localStorage.setItem("railer selected template html", editorsHtml);
      state.editedTemplateTemplate = [];
      state.editedTemplateTemplate.push({
        category,
        html,
        image,
      });
      console.log(state.editedTemplateTemplate);
      state.dialog = true;
    },

    goToSendTemplate: (state, template) => {
      state.dialog = false
      router.push("sendTemplate");
      return template
    },
  },
  actions: {
    doneEditing({ commit }) {
      commit("doneEditing");
    },
    goToSendTemplate({ commit }, template) {
      commit("goToSendTemplate", template);
    },
  },
};
