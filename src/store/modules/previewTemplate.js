import request from "request";
export default {
  state: {
    dialog: false,
    previewedTemplate: [],
  },
  getters: {
    previewedTemplate: (state) => state.previewedTemplate,
  },
  mutations: {
    previewTemplate: (state, template) => {
      request(template.html, (error, response, html) => {
        if (!error && response.statusCode == 200) {
          state.previewedTemplate = [];
          state.previewedTemplate.push({
            category: template.category,
            image: template.image,
            html,
          });
          state.dialog = true;
          console.log(state.previewedTemplate);
        } else {
          console.log("Error loading html");
        }
      });
    },
  },
  actions: {
    previewTemplate({ commit }, template) {
      commit("previewTemplate", template);
    },
  },
};
