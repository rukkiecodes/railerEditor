<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
      <div class="panel__top">
        <div title="Railer editor" class="logo">
          <img src="../assets/images/logoLight.png" class="logo_image" />
          <span>Railer</span>
        </div>
        <div class="panel__devices"></div>
        <div class="right">
          <div class="panel__basic-actions"></div>
          <v-btn
            dark
            small
            depressed
            class="mr-3 text-capitalize font-weight-bold"
            color="green accent-4"
            >Save</v-btn
          >
          <v-btn
            dark
            small
            depressed
            class="mr-2 text-capitalize font-weight-bold"
            color="deep-purple accent-4"
            >Preview</v-btn
          >
        </div>
      </div>
      <div class="editor-row">
        <div class="panel__left">
          <div class="blocks-container" id="blocks"></div>
        </div>
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div class="panel__right">
          <div class="traits-container"></div>
          <div class="styles-container"></div>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import emailEditor from "./editor"
export default {
  data: () => ({
    gjsHeight: 600,
    gjsWidth: 600,
  }),
  beforeMount() {
    localStorage.setItem("#gjscomponents", "")
    localStorage.setItem("#gjscss", "")
    localStorage.setItem("#gjshtml", "")
    localStorage.setItem("#gjsstyles", "")
  },
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
