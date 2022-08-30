import type { Router } from 'vue-router';
import { SetTitleFn } from './types';

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    title?: string;
  }
}

const setupRouter = (router: Router, setTitle: SetTitleFn): void => {
  router.afterEach((to, from) => {
    const { meta } = to;

    // if has meta and title
    if (meta?.title != null) {
      setTitle(meta.title);
    }
  });
};

export { setupRouter };
