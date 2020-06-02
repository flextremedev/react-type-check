import { isFunctionComponent } from '../is-function-component/isFunctionComponent';
import { isClassComponent } from '../is-class-component/isClassComponent';

export const isReactComponent = (
  maybeReactComponent: unknown
): maybeReactComponent is React.ComponentType =>
  isFunctionComponent(maybeReactComponent) ||
  isClassComponent(maybeReactComponent);
