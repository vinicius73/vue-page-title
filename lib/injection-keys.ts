import type { InjectionKey, Ref } from "vue";

export const PAGE_TITLE: InjectionKey<Ref<string>> = Symbol("title");
export const SET_PAGE_TITLE: InjectionKey<(val: string) => void> = Symbol("set-title");
