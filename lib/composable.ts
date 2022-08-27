import { ComputedRef, ComputedGetter, WatchSource } from "vue";
import { inject, computed, ref, watch } from "vue";
import { PAGE_TITLE, SET_PAGE_TITLE } from './injection-keys'

export type initialValue =
  | string
  | ComputedRef<string>
  | ComputedGetter<string>
  | WatchSource<string>;

const useTitle = (initial?: initialValue) => {
  const title = inject(PAGE_TITLE, ref<string>(""));
  const setTitle = inject(SET_PAGE_TITLE, () => {});

  if (typeof initial === 'string') {
    setTitle(initial)
  } else if (initial != null) {
    watch(initial, setTitle, { immediate: true })
  }

  return {
    title: computed(() => title?.value),
    setTitle,
  };
};

export { useTitle };