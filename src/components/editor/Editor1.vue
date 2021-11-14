<template>
  <v-app class="dashboardColor">
    <Appbar />
    <Drawer />
    <v-sheet id="gjs" class="red"> </v-sheet>
  </v-app>
</template>

<script>
// @ts-nocheck
import emailEditor from "./editor"
import Appbar from "./components/Appbar.vue"
import Drawer from "./components/Drawer.vue"
export default {
  components: {
    Appbar,
    Drawer
  },
  mounted() {
    this.$nextTick(() => {
      emailEditor()
      // const blockButton = document.querySelector(".block-button")
      setTimeout(() => {
        // blockButton.click()
      }, 1000)

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
