import { ComputedRef, ComputedGetter, WatchSource } from "vue";
import { inject, computed, ref, watch } from "vue";
import { PAGE_TITLE, SET_PAGE_TITLE } from './injection-keys'

export type initialValue =
  | string
  | ComputedRef<string>
  | ComputedGetter<string>
  | WatchSource<string>;

/**
 * Get current title or update it.
 *
 * ## Define initial title
 *
 * ```ts
 * const { title } = useTitle('initial title`)
 * ```
 *
 * ## React from ref state
 *
 * ```ts
 * const name = ref('initial name')
 * const { title } = useTitle(name)
 * ```
 *
 * ## Use like a watch source argument
 *
 * ```ts
 * const product = ref({ name: 'One Piece 1017' })
 * const { title } = useTitle(() => product.name)
 * ```
 *
 * ## Pass a computed as argument
 *
 * ```ts
 * const product = ref({ name: 'One Piece 1017' })
 * const name = computed(() => product.name)
 * const { title } = useTitle(name)
 * ```
 *
 * ## Use `setTitle` to dynamically change the title
 *
 * ```ts
 * const product = ref({ name: 'One Piece 1017' })
 * const { setTitle } = useTitle()
 *
 * watchEffect(() => {
 *   setTitle(product.name)
 * })
 * ```
 */
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