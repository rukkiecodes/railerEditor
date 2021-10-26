import Vue from "vue"
import Vuex from "vuex"

import editor from "./modules/editor"
import signup from "./modules/auth/signup"
import login from "./modules/auth/login"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor,
    signup,
    login,
  },
})
