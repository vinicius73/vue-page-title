import type { Router } from "vue-router";

export interface TitleOptions {
  prefix?: string;
  suffix?: string;
}

export type SetTitleFn = (val: string) => void

export interface SetTitleOptions extends TitleOptions {
  setTitleMethod?: SetTitleFn
}

export interface PageTitleOptions extends SetTitleOptions {
  router?: Router;
}
