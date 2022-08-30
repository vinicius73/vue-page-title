import { createRouter, createWebHashHistory } from 'vue-router'

const BASE_URL = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./views/home.vue"),
      meta: {
        title: "🏠",
      },
    },
    {
      name: "about",
      path: "/about",
      component: () => import("./views/about.vue"),
    },
  ],
});

export { router }