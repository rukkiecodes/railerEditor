<template>
  <v-bottom-sheet v-model="editor.dialog" dark persistent>
    <v-sheet class="text-center" min-height="300">
      <v-toolbar dense flat>
        <v-spacer></v-spacer>
        <v-btn icon @click="editor.dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row no-gutters justify="space-between" align="start">
        <v-col cols="6">
          <v-sheet min-height="500" color="white" class="htmlEditorContainer">
            <div
              :style="{ width: editorWidth + 'px', height: editorHeight + 'px' }"
              id="aceHtml"
            >
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet min-height="500" color="white">
            <div id="aceCss"></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import htmlCodeEditor from "./htmlCodeEditor.js"
import { mapState } from "vuex"
export default {
  data: () => ({
    editorWidth: 500,
    editorHeight: 500,
  }),
  mounted() {
    this.$nextTick(() => {
      const htmlEditorContainer = document.querySelector(".htmlEditorContainer")

      if (htmlEditorContainer) {
        this.editorWidth = htmlEditorContainer.offsetWidth
        this.editorHeight = htmlEditorContainer.offsetHeight
        htmlCodeEditor()
      }
    })
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>
