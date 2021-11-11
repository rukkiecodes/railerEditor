<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
      <div id="gjs"></div>
    </v-sheet>
  </v-container>
</template>

<script>
// @ts-nocheck
import emailEditor from "./editor"
export default {
  data: () => ({
    gjsHeight: 600,
    gjsWidth: 600,
  }),
  mounted() {
    this.$nextTick(() => {
      const editorSheet = document.querySelector(".editorSheet")
      this.gjsHeight = editorSheet.offsetHeight
      this.gjsWidth = editorSheet.offsetWidth
      emailEditor()

      // Hide Scrollbar
      let elHtml = document.getElementsByTagName("html")[0]
      elHtml.style.overflowY = "hidden"
    })
  },
  
  destroyed() {
    let elHtml = document.getElementsByTagName("html")[0]
    elHtml.style.overflowY = null
  },
}
</script>

<style>
@import url(./assets/editor.css);
</style>
