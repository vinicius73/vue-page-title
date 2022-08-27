import type { App, Plugin } from 'vue'
import type { PageTitleOptions } from "./types";
import { ref } from 'vue'
import { setPageTitle } from "./page-title";
import { setupRouter } from './router'
import { PAGE_TITLE, SET_PAGE_TITLE } from './injection-keys'

export * from './composable'
export * from './types'

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $title: string;
    $setPageTitle: (val: string) => void;
  }
}

const pageTitle = (options: PageTitleOptions = {}): Plugin => {
  // title state
  const $title = ref<string>("");

  const setTitle = (val: string): void => {
    setPageTitle(val, options);
    $title.value = val;
  };

  const installedApps = new WeakSet<App>();

  if (options.router) {
    setupRouter(options.router, setTitle);
  }

  const install = (app: App) => {
    // prevent double install
    if (installedApps.has(app)) {
      return;
    }

    installedApps.add(app);

    app.provide(PAGE_TITLE, $title);
    app.provide(SET_PAGE_TITLE, setTitle);

    // add title to component context
    Object.defineProperty(app.config.globalProperties, "$title", {
      get: () => $title.value,
    });

    // add setPageTitle to component context
    Object.defineProperty(app.config.globalProperties, "$setPageTitle", {
      get: () => setTitle,
    });
  };

  return { install };
};

export { pageTitle }
