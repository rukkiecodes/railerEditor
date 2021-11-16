<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
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
          <v-btn color="#4CB9EA" class="text-capitalize exportButton" dark>Export</v-btn>
        </div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div
          class="panel_right_container"
          :style="{ width: panelWidth + 'px' }"
          @mouseenter="buttonVisibility = true"
          @mouseleave="buttonVisibility = false"
        >
          <v-fab-transition>
            <v-btn
              class="floading__button"
              color="#4CB9EA"
              fab
              dark
              x-small
              absolute
              @click="togglePanel"
              v-show="buttonVisibility || panelWidth == 15"
            >
              <v-icon v-show="panelWidth == 411">mdi-chevron-right</v-icon>
              <v-icon v-show="panelWidth == 15">mdi-chevron-left</v-icon>
            </v-btn>
          </v-fab-transition>
          <div class="panel__switcher"></div>
          <v-sheet
            height="91.9472913616vh"
            color="blue"
            class="overflow-y-auto panel_right_sheet"
          >
            <div class="panel__right">
              <div class="blocks-container"></div>
              <div class="styles-container"></div>
              <div class="layers-container"></div>
              <div class="traits-container"></div>
            </div>
          </v-sheet>
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
    panelWidth: 411,
    panel: true,
    buttonVisibility: false,
  }),
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

  methods: {
    togglePanel() {
      const panel__right = document.querySelector(".panel__right")
      if (this.panelWidth == 411) {
        this.panelWidth = 15

        panel__right.classList.add("remove_scrollbar")
      } else if (this.panelWidth == 15) {
        this.panelWidth = 411
        panel__right.classList.remove("remove_scrollbar")
      }
    },
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
