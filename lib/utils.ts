
/**
 * test if object is a function
 */
const isFunction = (object: unknown): boolean => typeof object === "function";

/**
 * prevent output undefined
 */
const safeString = (st?: Object): string => (st || "").toString();

export { isFunction, safeString };
