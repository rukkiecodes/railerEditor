<template>
  <Login />
</template>

<script>
export default {
  components: {
    Login: () => import("../../components/auth/Login.vue"),
  },
}
</script>
