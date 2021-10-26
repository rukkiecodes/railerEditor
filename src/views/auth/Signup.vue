<template>
  <Signup />
</template>

<script>
export default {
  components: {
    Signup: () => import("../../components/auth/Signup.vue"),
  },
}
</script>
