import type { Router } from "vue-router";

export interface TitleOptions {
  prefix?: string;
  suffix?: string;
}

export interface SetTitleOptions extends TitleOptions {
  setTitleMethod?(value: string): void;
}

export interface PageTitleOptions extends SetTitleOptions {
  router?: Router;
}
