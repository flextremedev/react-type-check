import React from 'react';
/* istanbul ignore next */
const functionComponent = () => <div>I'm a function</div>;
const getFunctionComponent = (): React.FC => functionComponent;
/* istanbul ignore next */
class ClassComponent extends React.Component {
  render() {
    return <div>I'm a class</div>;
  }
}
const getClassComponent = (): React.ComponentClass => ClassComponent;
const ComponentToMemoize: React.FC = () => <div>I'm a memoized function</div>;
const MemoizedComponent = React.memo<React.ComponentType>(ComponentToMemoize);
const getMemoizedComponent = (): React.MemoExoticComponent<
  React.ComponentType
> => MemoizedComponent;

export { getFunctionComponent, getClassComponent, getMemoizedComponent };
