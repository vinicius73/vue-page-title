import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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