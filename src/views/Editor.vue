<template>
  <Editor />
</template>

<script>
export default {
  components: {
    Editor: () => import("../components/editor/Editor.vue")
  }
}
</script>
