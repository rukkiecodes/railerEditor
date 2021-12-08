<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
      <div class="panel__top">
        <div class="panel_left">
          <Logo />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-8" v-bind="attrs" v-on="on" dark plain icon>
                <v-img max-width="20" src="./images/templates.svg"></v-img>
              </v-btn>
            </template>
            <span>Template cataloge</span>
          </v-tooltip>
          <v-divider class="mx-3" dark vertical />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="previewButton"
                v-bind="attrs"
                v-on="on"
                dark
                plain
                icon
              >
                <v-img max-width="20" src="./images/preview.svg"></v-img>
              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>
          <v-divider class="mx-3" dark vertical />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="openSendDialog"
                v-bind="attrs"
                v-on="on"
                dark
                plain
                icon
              >
                <v-img max-width="20" src="./images/send-test.svg"></v-img>
              </v-btn>
            </template>
            <span>quick send</span>
          </v-tooltip>
        </div>
        <div class="panel__devices"></div>
        <div class="panel_right">
          <div class="panel__basic-actions"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="text-capitalize exportButton"
                color="#4CB9EA"
                v-bind="attrs"
                v-on="on"
                depressed
                icon
                dark
              >
                <v-icon>mdi-cloud-download-outline</v-icon>
              </v-btn>
            </template>
            <span>Export email</span>
          </v-tooltip>
        </div>
      </div>
      <!-- <div class="panel__devices"></div> -->
      <div class="editor-row">
        <div
          class="panel_left_container"
          :style="{ width: panelWidth + 'px' }"
        >
          <div class="blocks-container"></div>
        </div>
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div
          class="panel_right_container"
          :style="{ width: panelWidth + 'px' }"
        >
          <!-- <div :style="{ display: panelDisplay }" class="panel__switcher"></div> -->
          <v-sheet
            :style="{ display: panelDisplay }"
            height="94vh"
            class="overflow-y-auto panel_right_sheet"
          >
            <div class="panel__right">
              <!-- <div class="blocks-container"></div> -->
              <div class="styles-container"></div>
              <!-- <div class="layers-container"></div> -->
            </div>
          </v-sheet>
        </div>
      </div>
    </v-sheet>
    <SendDialog />
  </v-container>
</template>

<script>
// @ts-nocheck
import emailEditor from "./editor"
import SendDialog from "./SendDialog.vue"

import { mapState } from "vuex"
export default {
  data: () => ({
    panelWidth: 250,
    panel: true,
    panelDisplay: "",
  }),

  components: {
    Logo: () => import("./components/Logo.vue"),
    SendDialog,
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
        this.panelWidth = 0
        this.panelDisplay = "none"

        panel__right.classList.add("remove_scrollbar")
      } else if (this.panelWidth == 0) {
        this.panelWidth = 411
        this.panelDisplay = ""
        panel__right.classList.remove("remove_scrollbar")
      }
    },

    openSendDialog() {
      this.editor.sendDialog = true
    },
  },

  destroyed() {
    let elHtml = document.getElementsByTagName("html")[0]
    elHtml.style.overflowY = null
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>

<style>
@import url(./assets/editor.css);
</style>
