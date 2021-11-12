<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
      <div class="panel__top">
        <div class="panel__basic-actions"></div>
        <div class="panel__devices"></div>
        <div class="panel__switcher"></div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div class="panel__right">
          <div class="layers-container"></div>
          <div class="styles-container"></div>
          <div class="traits-container"></div>
          <div class="blocks-container"></div>
        </div>
      </div>
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
    emailEditor()
    this.$nextTick(() => {
      const editorSheet = document.querySelector(".editorSheet")
      this.gjsHeight = editorSheet.offsetHeight
      this.gjsWidth = editorSheet.offsetWidth

      // const blockButton = document.querySelector(".block-button")
      // blockButton.style.display = "none"

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
