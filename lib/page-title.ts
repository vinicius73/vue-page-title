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
  const prefix = safeString(options.prefix);
  const suffix = safeString(options.suffix);

  let separator = safeString(options.separator);

  if (separator.length === 0) {
    separator = ' ';
  }

  if (value.length === 0) {
    if (prefix.length > 0 && suffix.length > 0) {
      // if both prefix and suffix are set, return them with the separator
      return `${prefix}${separator}${suffix}`.trim();
    } else {
      // if only one of prefix or suffix is set, return the one that's set
      return `${prefix}${suffix}`.trim();
    }
  }

  if (prefix.length > 0) {
    value = `${prefix}${separator}${value}`;
  }

  if (suffix.length > 0) {
    value = `${value}${separator}${suffix}`;
  }

  return value.trim();
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
