/**
 * test if val is a function
 */
const isFunction = (val: unknown): val is Function => typeof val === 'function';

/**
 * prevent output undefined
 */
// eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const safeString = (st?: Object): string => (st || '').toString();

export { isFunction, safeString };
