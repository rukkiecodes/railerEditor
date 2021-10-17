import axios from "axios";
import VueCookie from "vue-cookie";
export default {
  state: {
    userData: [],
  },
  getters: {
    userData: (state) => state.userData,
  },
  mutations: {
    getProfile: (state, response) => {
      state.userData = []
      if (response.data.data.status == 200) {
        state.userData.push(response.data.data.data);
        console.log(state.userData);
      }
      return state;
    },
  },
  actions: {
    async getProfile({ commit }) {
      const data = JSON.parse(VueCookie.get("railer data"));
      const response = await axios.post("http://localhost:3000/auth/profile", {
        id: data.id,
      });
      commit("getProfile", response);
    },
  },
};
