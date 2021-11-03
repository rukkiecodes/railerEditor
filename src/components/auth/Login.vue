<template>
  <v-container fluid class="pa-0">
    <v-sheet color="white" height="100vh">
      <v-row
        no-gutters
        align="center"
        style="height: 100%"
        justify="space-between"
      >
        <v-col
          lg="4"
          cols="12"
          style="height: 100%"
          class="d-flex justify-center align-center"
        >
          <v-card width="90%" tile flat>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-text-field
                type="email"
                label="Email"
                color="deep-purple accent-4"
                v-model="login.credential.email"
                prepend-inner-icon="mdi-email-variant"
                :rules="[rules.required, rules.emailMatch]"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="input-10-1"
                color="deep-purple accent-4"
                v-model="login.credential.password"
                :rules="[rules.required, rules.min]"
                prepend-inner-icon="mdi-lock-outline"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-text-field>
            </v-card-text>
            <v-card-text class="pt-0 d-flex justify-end align-center">
              <router-link class="text-decoration-none" to="/"
                >Don't have an account? Signup</router-link
              >
            </v-card-text>
            <v-card-actions>
              <v-btn
                dark
                tile
                block
                depressed
                :loading="login.loading"
                @click="loginUser"
                color="deep-purple accent-4"
                >login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          lg="8"
          cols="12"
          style="height: 100%"
          class="deep-purple accent-4"
        ></v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: (v) =>
          v.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) || "Invalid email",
      },
    }
  },

  methods: {
    ...mapActions(["loginUser"])
  },

  computed: {
    ...mapState(["login"]),
  },
}
</script>