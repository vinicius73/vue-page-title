import type { Router } from "vue-router";
import type { ComponentOptions, ComponentCustomOptions } from '@vue/runtime-core'

export interface TitleOptions {
  /**
   * Prefix to be used in title generation
   */
  prefix?: string;
  /**
   * Suffix to be used in title generation
   */
  suffix?: string;
}

export type SetTitleFn = (val: string) => void
export type TitleOptionFn<T = ComponentOptions> = (this: T, ctx: T) => string

export type TitleOption = TitleOptionFn | string

export interface SetTitleOptions extends TitleOptions {
  /**
   * Custom title definition
   */
  setTitleMethod?: SetTitleFn
}

export interface PageTitleOptions extends SetTitleOptions {
  /**
   * Register mixin
   */
  mixin?: boolean,
  /**
   * Enable router integration
   */
  router?: Router;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    /**
     * Current title
     */
    $title: string;
    /**
     * Update current title
     */
    $setPageTitle: SetTitleFn;
  }

  interface ComponentCustomOptions {
    /**
     * Title component option
     * `mixin` must be true
     */
    title?: TitleOption;
  }
}
