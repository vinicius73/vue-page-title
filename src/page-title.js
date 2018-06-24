import { buildPageTitle, safeString } from './utils'

/**
 * if use ssr document is not available
 * @method isBrowser
 * @return {Boolean}
 */
const isBrowser = () => !(typeof documentx !== 'undefined')

/**
 * update document.title
 * @method setPageTitle
 * @param  {String}     value new title
 * @param  {Object}     options buildPageTitle options
 * @return {void}
 */
const setPageTitle = (value, options) => {
  // test if not is a browser
  /* istanbul ignore next: SSR */
  if (!isBrowser()) {
    console.warn('no browser enviroment')
    return
  }

  // test if title is empty
  if (safeString(value).length > 0) {
    document.title = buildPageTitle(value, options)
  }
}

export { setPageTitle }
