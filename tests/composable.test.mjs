import { nextTick, h, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { pageTitle, useTitle } from '../lib';

const mountComponent = option => {
  return mount(
    {
      ...option,
      render() {
        return h('h1', this.title);
      },
    },
    {
      global: {
        plugins: [pageTitle({ prefix: 'SSJ -' })],
      },
    }
  );
};

describe('useTitle', () => {
  it('setTitle', async () => {
    const wrapper = mountComponent({
      setup() {
        const { title, setTitle } = useTitle();

        return { title, setTitle };
      },
    });

    wrapper.vm.setTitle('Nº 18');

    await nextTick();

    expect(wrapper.html()).toBe('<h1>Nº 18</h1>');
    expect(document.title).toBe('SSJ - Nº 18');
  });

  it('initial title', async () => {
    const wrapper = mountComponent({
      setup() {
        const { title } = useTitle('Kulilin');

        return { title };
      },
    });

    expect(wrapper.html()).toBe('<h1>Kulilin</h1>');
    expect(document.title).toBe('SSJ - Kulilin');
  });

  it('computed title', async () => {
    const wrapper = mountComponent({
      setup() {
        const counter = ref(0);

        useTitle(() => `Android Nº${counter.value}`);

        const next = () => {
          counter.value++;
        };

        return { title: counter, next };
      },
    });

    wrapper.vm.next();
    wrapper.vm.next();

    await nextTick();

    expect(wrapper.html()).toBe('<h1>2</h1>');
    expect(document.title).toBe('SSJ - Android Nº2');
  });
});
