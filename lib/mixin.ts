import type { ComponentOptionsMixin, CreateComponentPublicInstance } from 'vue';
import { isFunction } from './utils';

/**
 * Mixin, to be used in options API
 * Can be used locally or registered globally using `mixin: true`
 */
const pageTitleMixin: ComponentOptionsMixin = {
  created(this: CreateComponentPublicInstance) {
    const { title } = this.$options;

    if (title === undefined) {
      return;
    }

    // allow use dinamic title system
    if (isFunction(title)) {
      this.$watch(
        () => title.call(this, this),
        (val: string) => {
          this.$setPageTitle(val);
        },
        { immediate: true }
      );
      return;
    }

    this.$setPageTitle(title);
  },
};

export { pageTitleMixin };
