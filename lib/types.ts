import type { Router } from "vue-router";
import type { ComponentOptions, ComponentCustomOptions } from '@vue/runtime-core'

export interface TitleOptions {
  prefix?: string;
  suffix?: string;
}

export type SetTitleFn = (val: string) => void
export type TitleOptionFn<T = ComponentOptions> = (this: T, ctx: T) => string

export type TitleOption = TitleOptionFn | string

export interface SetTitleOptions extends TitleOptions {
  setTitleMethod?: SetTitleFn
}

export interface PageTitleOptions extends SetTitleOptions {
  mixin?: boolean,
  router?: Router;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $title: string;
    $setPageTitle: SetTitleFn;
  }
  interface ComponentCustomOptions {
    title?: TitleOption;
  }
}
