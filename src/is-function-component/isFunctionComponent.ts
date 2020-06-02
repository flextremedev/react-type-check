import { isClassComponent } from '../is-class-component/isClassComponent';

export const isFunctionComponent = (
  maybeFunctionComponent: unknown
): maybeFunctionComponent is React.FC => {
  return (
    typeof maybeFunctionComponent === 'function' &&
    /react.*createElement/i.test(String(maybeFunctionComponent)) &&
    !isClassComponent(maybeFunctionComponent)
  );
};
