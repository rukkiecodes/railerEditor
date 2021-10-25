<template>
  <v-bottom-sheet v-model="editor.dialog" dark persistent>
    <v-sheet class="text-center" min-height="300" color="#1c1e31">
      <v-toolbar dense flat color="#1c1e31">
        <v-spacer></v-spacer>
        <v-btn icon @click="editor.dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row no-gutters justify="space-between" align="start">
        <v-col cols="6">
          <v-sheet min-height="500" color="transparent" class="htmlEditorContainer">
            <div
              :style="{
                width: editorWidth + 'px',
                height: editorHeight + 'px',
              }"
              id="aceHtml"
              v-model="editor.htmlCode"
            ></div>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet min-height="500" color="white" class="cssEditorContainer">
            <div
              :style="{
                width: editorWidth + 'px',
                height: editorHeight + 'px',
              }"
              id="aceCss"
              v-model="editor.cssCode"
            ></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
// @ts-nocheck
import htmlCodeEditor from "./htmlCodeEditor.js"
import csslCodeEditor from "./csslCodeEditor.js"
import { mapState } from "vuex"
export default {
  data: () => ({
    editorWidth: 500,
    editorHeight: 500,
  }),
  mounted() {
    this.$nextTick(() => {
      const htmlEditorContainer = document.querySelector(".htmlEditorContainer")
      const cssEditorContainer = document.querySelector(".cssEditorContainer")

      if (htmlEditorContainer && cssEditorContainer) {
        this.editorWidth = htmlEditorContainer.offsetWidth
        this.editorHeight = htmlEditorContainer.offsetHeight
        htmlCodeEditor()
        csslCodeEditor()
      }
    })
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>
