import { createRouter, createWebHashHistory } from 'vue-router';

const BASE_URL = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: async () => await import('./views/home.vue'),
      meta: {
        title: '🏠',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: async () => await import('./views/about.vue'),
    },
  ],
});

export { router };
