import type { TitleOptions, SetTitleOptions } from './types';
import { safeString } from './utils';

/**
 * if use ssr document is not available
 */
const isBrowser = (): boolean => typeof document !== 'undefined';

/**
 * build a full title with prefix, suffix and separator
 */
const buildPageTitle = (value: string, options: TitleOptions = {}): string => {
  const { prefix, suffix, separator } = options;
  const separatorString = value.length > 0 ? (safeString(separator).length > 0 ? safeString(separator) : ' ') : '';
  const prefixString = safeString(prefix).length > 0 ? safeString(prefix) + separatorString : '';
  const suffixString = safeString(suffix).length > 0 ? separatorString + safeString(suffix) : '';
  return `${prefixString}${value}${suffixString}`.trim();
};

const setPageTitle = (value: string, options: SetTitleOptions = {}): void => {
  // test if not is a browser
  if (!isBrowser()) {
    console.warn('vue-page-title: no browser enviroment');
    return;
  }

  value = safeString(value);

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
