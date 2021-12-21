<template>
  <v-dialog v-model="editor.sendDialog" width="400px" persistent>
    <v-card>
      <v-card-title>Insert email address and subject:</v-card-title>
      <v-card-text>
        <v-text-field label="Email" placeholder="Enter your email" color="#3D3DF4"></v-text-field>
        <v-text-field label="Subject" placeholder="Look at this amazing email" color="#3D3DF4"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="editor.sendDialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="editor.sendDialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["editor"]),
  },
}
</script>
