type AnyObject = { [key: string]: unknown };

export const isObject = (maybeObject: unknown): maybeObject is AnyObject =>
  typeof maybeObject === 'object' && maybeObject !== null;
