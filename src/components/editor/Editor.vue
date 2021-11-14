<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0 red" height="100vh">
      <div class="panel__top">
        <div class="panel_left">
          <Logo />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-8"
                color="white"
                v-bind="attrs"
                v-on="on"
                dark
                plain
                icon
              >
                <v-icon>mdi-text-box-multiple-outline</v-icon>
              </v-btn>
            </template>
            <span>Template cataloge</span>
          </v-tooltip>
          <v-divider class="mx-3" dark vertical />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="white" v-bind="attrs" v-on="on" dark plain icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>
          <v-divider class="mx-3" dark vertical />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="white" v-bind="attrs" v-on="on" dark plain icon>
                <v-icon>mdi-send mdi-rotate-315</v-icon>
              </v-btn>
            </template>
            <span>quick send</span>
          </v-tooltip>
        </div>
        <div class="panel__devices"></div>
        <div class="panel_right">
          <div class="panel__basic-actions"></div>
        </div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div class="panel__right">
          <div class="panel__switcher"></div>
          <div class="blocks-container"></div>
          <div class="styles-container"></div>
          <div class="layers-container"></div>
          <div class="traits-container"></div>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
// @ts-nocheck
import emailEditor from "./editor"
export default {
  components: {
    Logo: () => import("./components/Logo.vue"),
  },
  mounted() {
    emailEditor()
    this.$nextTick(() => {
      const blockButton = document.querySelector(".block-button")
      setTimeout(() => {
        blockButton.click()
      }, 200)

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
