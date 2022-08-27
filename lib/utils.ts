
/**
 * test if val is a function
 */
const isFunction = (val: unknown): val is Function => typeof val === "function";

/**
 * prevent output undefined
 */
const safeString = (st?: Object): string => (st || "").toString();

export { isFunction, safeString };
