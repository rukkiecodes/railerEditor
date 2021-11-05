import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../views/Editor.vue"),
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/pageNotFound.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
