<template>
  <v-container fluid class="pa-0 editorContainer">
    <v-sheet class="editorSheet ma-0 pa-0" height="100vh">
      <div class="panel__top">
        <div class="panel_left">
          <Logo />
        </div>
        <div class="panel__devices"></div>
        <div class="panel_right">
          <div class="panel__basic-actions"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" plain dark icon>
                <v-img max-width="20" src="./images/templates.svg"></v-img>
              </v-btn>
            </template>
            <span>Template cataloge</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="previewButton ml-3"
                color="#1d1d1d"
                v-bind="attrs"
                v-on="on"
                plain
                dark
                icon
              >
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="openSendDialog"
                class="ml-3"
                v-bind="attrs"
                v-on="on"
                plain
                dark
                icon
              >
                <v-img max-width="20" src="./images/send-test.svg"></v-img>
              </v-btn>
            </template>
            <span>quick send</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="text-capitalize exportButton ml-3"
                color="#1d1d1d"
                v-bind="attrs"
                v-on="on"
                plain
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
      <div class="editor-row">
        <div class="panel_left_container" :style="{ width: panelWidth + 'px' }">
          <!-- <div class="blocks-container"></div> -->
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              grow
            >
              <v-tab>
                <v-icon>mdi-shape-plus</v-icon>
              </v-tab>
              
              <v-tab>
                <v-icon>mdi-rocket-launch</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card color="white" flat>
                  <div class="blocks-container"></div>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card color="white" flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div
          class="panel_right_container"
          :style="{ width: panelWidth + 'px' }"
        >
          <v-sheet
            :style="{ display: panelDisplay }"
            height="94vh"
            class="overflow-y-auto panel_right_sheet"
          >
            <div class="panel__right">
              <div class="styles-container"></div>
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
    tab: null,
    items: ["mdi-shape-plus", "mdi-rocket-launch"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
