<template>
  <v-container class="pa-0">
    <v-sheet class="overflow-y-auto" v-html="html"></v-sheet>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    html: ``,
  }),
  mounted() {
    this.$nextTick(() => {
      this.loadHtml()
    })
  },

  updated() {
    this.loadHtml()
  },

  methods: {
    loadHtml() {
      this.html = this.editor.html.innerHTML
    },
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>
