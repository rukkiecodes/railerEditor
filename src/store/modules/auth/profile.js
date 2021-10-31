import axios from "axios"
import vueCookie from "vue-cookie"

export default {
  state: {
    profile: [],
  },
  getters: {
    profile: (state) => state.profile,
  },
  mutations: {
    getProfile: (state, response) => {
      state.profile = []
      state.profile.push(response.data.user)
      console.log(state.profile)
    },
  },
  actions: {
    async getProfile({ commit }) {
      const email = vueCookie.get("railer email")
      const token = vueCookie.get("railer token")
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/profile",
          { email, token }
        )
        commit("getProfile", response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
