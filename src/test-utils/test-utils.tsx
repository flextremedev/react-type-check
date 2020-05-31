import React from 'react';
/* istanbul ignore next */
const functionComponent = () => <div>I'm a function</div>;
export const getFunctionComponent = (): React.FC => functionComponent;
/* istanbul ignore next */
class ClassComponent extends React.Component {
  render() {
    return <div>I'm a class</div>;
  }
}
export const getClassComponent = (): React.ComponentClass => ClassComponent;
