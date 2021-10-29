import axios from "axios"
import router from "../../../router"

export default {
  state: {
    credential: {
      email: "",
      password: "",
    },
    loading: false,
  },

  mutations: {
    createUser: (state, response) => {
      if (response.status == 201) {
        state.loading = false
        router.push("/login")
      } else {
        state.loading = false
        router.push("/")
      }
    },
  },

  actions: {
    async createUser({ commit }) {
      const currentStore = this.state.signup
      currentStore.loading = true
      if (
        currentStore.credential.email.match(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        ) &&
        currentStore.credential.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signup",
            currentStore.credential
          )
          commit("createUser", response)
          currentStore.loading = false
        } catch (error) {
          currentStore.loading = false
          this.state.snackbar.snack = true
          this.state.snackbar.text = "ERROR!!! This email is taken try another"
          this.state.snackbar.color = "error"
          this.state.snackbar.buttonColor = "white"
        }
      } else {
        currentStore.loading = false
        this.state.snackbar.snack = true
        this.state.snackbar.text = "Please complete the form and try again"
        this.state.snackbar.color = "error"
        this.state.snackbar.buttonColor = "white"
      }
    },
  },
}
