<template>
  <v-snackbar bottom left :color="snackbar.color" v-model="snackbar.snack">
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        v-bind="attrs"
        :color="snackbar.buttonColor"
        @click="snackbar.snack = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["snackbar"]),
  },
}
</script>
