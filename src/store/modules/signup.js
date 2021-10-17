import axios from "axios";
import router from "../../router"
export default {
  state: {
    credentials: {
      name: "",
      email: "",
      password: "",
    },
    loading: false,
  },
  mutations: {
    regiterUser: (state, response) => {
      if (response.status == 201) {
        state.loading = false;
        router.push("/")
        console.log("User: ", response);
      } else {
        state.loading = false;
        console.log("Error signing Up");
      }
    },
  },
  actions: {
    async regiterUser({ commit }) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (
        this.state.signup.credentials.name &&
        this.state.signup.credentials.email.match(emailRegex) &&
        this.state.signup.credentials.password
      ) {
        try {
          this.state.signup.loading = true;
          const response = await axios.post(
            "http://localhost:3000/auth/register",
            this.state.signup.credentials
          );
          commit("regiterUser", response);
        } catch (err) {
          console.log("Error registering user", err);
          this.state.signup.loading = false;
          this.state.snackbar.snack = true;
          this.state.snackbar.color = "error";
          this.state.snackbar.text = "This email is taken. Try another";
        }
      } else {
        this.state.snackbar.snack = true;
        this.state.snackbar.color = "error";
        this.state.snackbar.text = "Please complete the form to sign up";
      }
    },
  },
};
