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
  ],
});

export { router }