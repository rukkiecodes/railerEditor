import axios from "axios"
import vueCookie from "vue-cookie"
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
    loginUser: (state, response) => {
      if (response.status == 200) {
        state.loading = false
        console.log(response.data)
        vueCookie.set("railer token", response.data.token)
        vueCookie.set("railer email", response.data.user.email)
        vueCookie.set("railer id", response.data.user._id)
        router.push("/designs")
      } else {
        state.loading = false
        router.push("/")
      }
    },
  },
  actions: {
    async loginUser({ commit }) {
      const currentStore = this.state.login
      currentStore.loading = true
      if (
        currentStore.credential.email.match(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        ) &&
        currentStore.credential.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/login",
            currentStore.credential
          )
          commit("loginUser", response)
          currentStore.loading = false
        } catch (error) {
          currentStore.loading = false
          this.state.snackbar.snack = true
          this.state.snackbar.text = "Email or password does not exist"
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
