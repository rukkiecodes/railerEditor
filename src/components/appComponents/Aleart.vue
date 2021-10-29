<template>
  <v-snackbar
    left
    bottom
    :color="snackbar.color"
    v-model="snackbar.snack"
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="snackbar.buttonColor"
        icon
        v-bind="attrs"
        @click="snackbar.snack = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    text: `Hello, I'm a snackbar`,
  }),
  computed: {
    ...mapState(["snackbar"])
  },
};
</script>
