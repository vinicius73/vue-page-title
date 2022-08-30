import type { TitleOptions, SetTitleOptions } from './types';
import { safeString } from './utils';

/**
 * if use ssr document is not available
 */
const isBrowser = (): boolean => typeof document !== 'undefined';

/**
 * build a full title white suffix and prefix
 */
const buildPageTitle = (value: string, options: TitleOptions = {}): string => {
  const { prefix, suffix } = options;

  return `${safeString(prefix)} ${value} ${safeString(suffix)}`.trim();
};

const setPageTitle = (value: string, options: SetTitleOptions = {}): void => {
  // test if not is a browser
  if (!isBrowser()) {
    console.warn('vue-page-title: no browser enviroment');
    return;
  }

  value = safeString(value);

  // test if title is empty
  if (value.length === 0) {
    return;
  }

  const { setTitleMethod } = options;
  const title = buildPageTitle(value, options);

  // use custom setTitle method
  if (setTitleMethod != null) {
    setTitleMethod(title);
    return;
  }

  document.title = title;
};

export { buildPageTitle, setPageTitle };