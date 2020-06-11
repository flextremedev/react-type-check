import { isFunctionComponent } from '../is-function-component/isFunctionComponent';
import { isClassComponent } from '../is-class-component/isClassComponent';
import { isMemoizedComponent } from '../is-memoized-component/isMemoizedComponent';

export const isReactComponent: (
  maybeReactComponent: unknown
) => maybeReactComponent is React.ComponentType = (
  maybeReactComponent: unknown
): maybeReactComponent is React.ComponentType =>
  isFunctionComponent(maybeReactComponent) ||
  isClassComponent(maybeReactComponent) ||
  isMemoizedComponent(maybeReactComponent);
