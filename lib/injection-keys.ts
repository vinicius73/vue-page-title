import type { InjectionKey, Ref } from "vue";
import type { SetTitleFn } from './types'

export const PAGE_TITLE: InjectionKey<Ref<string>> = Symbol("title");
export const SET_PAGE_TITLE: InjectionKey<SetTitleFn> = Symbol("set-title");
