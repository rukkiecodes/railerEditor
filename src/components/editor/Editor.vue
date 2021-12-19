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
          <v-toolbar dense flat>
            <v-btn
              @click="handleBlocksContainer"
              :color="blocks.color"
              class="rounded-lg"
              height="40"
              x-small
              depressed
            >
              <v-icon :color="blocks.icon">mdi-shape-plus</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              @click="handleComponentsContainer"
              class="rounded-lg"
              :color="components.color"
              height="40"
              x-small
              depressed
            >
              <v-icon :color="components.icon">mdi-rocket-launch</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              @click="handleRowsContainer"
              class="rounded-lg"
              height="40"
              :color="rows.color"
              x-small
              depressed
            >
              <v-icon :color="rows.icon">mdi-view-column-outline</v-icon>
            </v-btn>
          </v-toolbar>
          <div v-show="showComponents" class="componentContainer"></div>
          <div v-show="showBlocks" class="blocks-container"></div>
          <div v-show="showRows" class="rowContainer"></div>
        </div>
        <div class="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div class="configurationPanel pa-1">
          <v-btn
            :color="styleConfigurationButton.color"
            height="40"
            depressed
            x-small
            @click="toggleStyleMagager"
          >
            <v-icon :color="styleConfigurationButton.icon"
              >mdi-palette-outline</v-icon
            >
          </v-btn>
          <v-btn
            :color="traitsConfigurationButton.color"
            class="mt-2"
            height="40"
            depressed
            x-small
            @click="toggleTraitsMagager"
          >
            <v-icon :color="traitsConfigurationButton.icon"
              >mdi-cog-outline</v-icon
            >
          </v-btn>
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
              <div v-show="showStyleManager" class="styles-container">
                <div class="class-container"></div>
              </div>
              <div v-show="showTraitsManager" class="traits-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                inventore molestias dolore est minus repellendus porro vero,
                quo, labore aliquid maiores nulla cupiditate eum atque
                perspiciatis. Harum magnam eaque eius.
              </div>
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
    panelWidth: 230,
    panel: true,
    panelDisplay: "",
    tab: null,
    showBlocks: true,
    showComponents: false,
    showRows: false,
    blocks: {
      color: "#DBDBFD",
      icon: "#3D3DF4",
    },
    components: {
      color: "",
      icon: "",
    },
    rows: {
      color: "",
      icon: "",
    },
    showStyleManager: true,
    showTraitsManager: false,
    styleConfigurationButton: {
      color: "#DBDBFD",
      icon: "#3D3DF4",
    },
    traitsConfigurationButton: {
      color: "transparent",
      icon: "#737373",
    },
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

    handleBlocksContainer() {
      if (this.showComponents == true || this.showRows == true) {
        this.showBlocks = true
        this.showComponents = false
        this.showRows = false

        this.blocks = {
          color: "#DBDBFD",
          icon: "#3D3DF4",
        }
        this.components = {
          color: "",
          icon: "",
        }
        this.rows = {
          color: "",
          icon: "",
        }
      }
    },

    handleComponentsContainer() {
      if (this.showBlocks == true || this.showRows == true) {
        this.showComponents = true
        this.showRows = false
        this.showBlocks = false

        this.blocks = {
          color: "",
          icon: "",
        }
        this.components = {
          color: "#DBDBFD",
          icon: "#3D3DF4",
        }
        this.rows = {
          color: "",
          icon: "",
        }
      }
    },

    handleRowsContainer() {
      if (this.showComponents == true || this.showBlocks == true) {
        this.showRows = true
        this.showComponents = false
        this.showBlocks = false

        this.blocks = {
          color: "",
          icon: "",
        }
        this.components = {
          color: "",
          icon: "",
        }
        this.rows = {
          color: "#DBDBFD",
          icon: "#3D3DF4",
        }
      }
    },

    toggleStyleMagager() {
      this.showStyleManager = true
      this.showTraitsManager = false
      this.styleConfigurationButton = {
        color: "#DBDBFD",
        icon: "#3D3DF4",
      }
      this.traitsConfigurationButton = {
        color: "transparent",
        icon: "#737373",
      }
    },

    toggleTraitsMagager() {
      this.showStyleManager = false
      this.showTraitsManager = true
      this.styleConfigurationButton = {
        color: "transparent",
        icon: "#737373",
      }
      this.traitsConfigurationButton = {
        color: "#DBDBFD",
        icon: "#3D3DF4",
      }
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
