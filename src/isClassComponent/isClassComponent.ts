export const isClassComponent = (
  maybeClassComponent: unknown
): maybeClassComponent is React.ComponentClass => {
  return (
    typeof maybeClassComponent === 'function' &&
    Boolean(maybeClassComponent.prototype?.isReactComponent)
  );
};
