<template>
  <v-app-bar color="#363b3d" clipped-right flat app>
    <v-app-bar-title>
      <Logo />
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    Logo: () => import("./Logo.vue"),
  },
}
</script>
