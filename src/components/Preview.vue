<template>
  <v-container class="pa-0 ma-auto">
    <v-sheet class="overflow-y-auto mx-auto" v-html="html"></v-sheet>
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
