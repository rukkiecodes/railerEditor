import axios from "axios";
export default {
  state: {
    tamplates: [],
  },
  getters: {
    tamplates: (state) => state.tamplates,
  },
  mutations: {
    getDesigns: (state, response) => {
      if (response.status == 200) {
        state.tamplates = [];
        state.tamplates.push(...response.data.data);
        console.log(state.tamplates);
      } else {
        console.log("Error geting template designs");
      }
      return state;
    },
  },
  actions: {
    async getDesigns({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/templates/designs"
        );
        commit("getDesigns", response);
      } catch (err) {
        console.log("Error geting templates");
      }
    },
  },
};
