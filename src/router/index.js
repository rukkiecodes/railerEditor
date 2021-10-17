import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
