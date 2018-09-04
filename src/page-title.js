import { buildPageTitle, safeString, isFunction } from './utils'

/**
 * if use ssr document is not available
 * @method isBrowser
 * @return {Boolean}
 */
const isBrowser = () => (typeof document !== 'undefined')

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
    const { setTitleMethod } = options
    const title = buildPageTitle(value, options)

    // use custom setTitle method
    if (setTitleMethod && isFunction(setTitleMethod)) {
      setTitleMethod(title)
      return
    }

    document.title = title
  }
}

export { setPageTitle }
