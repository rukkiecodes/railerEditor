<template>
  <v-container class="pa-0" fluid>
    <div id="gjs">
      <h1>Hello World Component!</h1>
    </div>
  </v-container>
</template>

<script>
import "grapesjs/dist/css/grapes.min.css"
import grapesjs from "grapesjs"
export default {
  mounted() {
    this.$nextTick(() => {
      this.initEditor()
    })
  },
  methods: {
    initEditor() {
      const editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: "#gjs",
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: "300px",
        width: "auto",
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        panels: { defaults: [] },
      })
    },
  },
}
</script>

<style scoped>
/* Let's highlight canvas boundaries */
#gjs {
  border: 3px solid #444;
}

/* Reset some default styling */
.gjs-cv-canvas {
  top: 0;
  width: 100%;
  height: 100%;
}
</style>