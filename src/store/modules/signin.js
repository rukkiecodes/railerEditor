import axios from "axios";
import VueCookie from "vue-cookie";
import router from "../../router";
export default {
  state: {
    credentials: {
      email: "",
      password: "",
    },
    loading: false,
  },
  mutations: {
    signinUser: (state, response) => {
      console.log(response);
      if (response.status == 200) {
        console.log("User: ", response.data.data.data);
        VueCookie.set("railer token", response.data.data.token, {
          expires: "7D",
        });
        VueCookie.set("railer data", JSON.stringify(response.data.data.data), {
          expires: "7D",
        });
        state.loading = false;
        router.push("/dashboard/template");
      } else {
        state.loading = false;
        console.log("Error signing Up");
      }
    },
  },
  actions: {
    async signinUser({ commit }) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (
        this.state.signin.credentials.email.match(emailRegex) &&
        this.state.signin.credentials.password
      ) {
        try {
          this.state.signin.loading = true;
          const response = await axios.post(
            "http://localhost:3000/auth/signin",
            this.state.signin.credentials
          );
          commit("signinUser", response);
        } catch (err) {
          console.log("Error registering user", err);
          this.state.signin.loading = false;
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
