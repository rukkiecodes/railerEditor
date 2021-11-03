<template>
  <v-app>
    <v-main>
      <Snack />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Snack: () => import("./components/app/Snack.vue"),
  },
}
</script>

<style>
@import url(./assets/icon/css/materialdesignicons.min.css);
::-webkit-scrollbar {
  width: 0px;
}
</style>
