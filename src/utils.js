/**
 * test if object is a function
 * @method isFunction
 * @param  {any}      object
 * @return {Boolean}
 */
const isFunction = object => typeof (object) === 'function'

/**
 * prevent output undefined
 * @method safeString
 * @param  {String}   st
 * @return {String}
 */
const safeString = st => st || ''

/**
 * build a full title white suffix and prefix
 * @method buildPageTitle
 * @param  {String}       value
 * @param  {Object}       [options={ suffix, prefix }]
 * @return {String}       full title
 */
const buildPageTitle = (value, options = { }) => {
  const { prefix, suffix } = options

  return `${safeString(prefix)} ${value} ${safeString(suffix)}`.trim()
}

export { buildPageTitle, isFunction, safeString }
