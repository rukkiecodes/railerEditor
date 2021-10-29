<template>
  <v-app>
    <v-main>
      <Aleart />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Aleart: () => import("./components/appComponents/Aleart.vue"),
  },
}
</script>

<style>
@import url(./assets/icon/css/materialdesignicons.min.css);
::-webkit-scrollbar {
  width: 0px;
}
</style>
