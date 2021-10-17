import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./modules/snackbar";
import signup from "./modules/signup";
import signin from "./modules/signin";
import dashboardNav from "./modules/dashboardNav";
import getTemplates from "./modules/getTemplates"
import previewTemplate from "./modules/previewTemplate";
import editedTemplate from "./modules/editedTemplate";
import rawEditorState from "./modules/rawEditorState";
import userProfile from "./modules/userProfile";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbar,
    signup,
    signin,
    dashboardNav,
    getTemplates,
    previewTemplate,
    editedTemplate,
    rawEditorState,
    userProfile,
  },
});
