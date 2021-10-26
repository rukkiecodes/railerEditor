<template>
  <v-container fluid class="pa-0">
    <v-sheet color="white" height="100vh">
      <v-row style="height: 100%" justify="space-between" align="center">
        <v-col
          class="d-flex justify-center align-center"
          style="height: 100%"
          cols="12"
          lg="4"
        >
          <v-card width="90%" tile>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-text-field
                type="email"
                label="Email"
                color="deep-purple accent-4"
                v-model="login.credential.email"
                prepend-inner-icon="mdi-email-variant"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="input-10-1"
                color="deep-purple accent-4"
                :rules="[rules.required, rules.min]"
                prepend-inner-icon="mdi-lock-outline"
                v-model="login.credential.password"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-text-field>
            </v-card-text>
            <v-card-text class="pt-0 d-flex justify-end align-center">
              <router-link class="text-decoration-none" to="/login"
                >Don't have an account? Login</router-link
              >
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple accent-4" :loading="login.loading" depressed block dark tile
                >login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" lg="8"></v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },

  computed: {
    ...mapState(["login"])
  }
}
</script>
