import type React from 'react';
import { isObject } from '../utils/isObject';

export const isMemoizedComponent = (
  maybeMemoizedComponent: unknown
): maybeMemoizedComponent is React.MemoExoticComponent<React.ComponentType> => {
  if (isObject(maybeMemoizedComponent)) {
    const definitelyObject = maybeMemoizedComponent;
    if (definitelyObject.$$typeof) {
      const withTypeOf = definitelyObject.$$typeof;
      if (typeof withTypeOf === 'symbol') {
        const withSymbolTypeOf = withTypeOf;
        return withSymbolTypeOf.toString() === 'Symbol(react.memo)';
      }
    }
  }
  return false;
};
