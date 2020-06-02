import React from 'react';
import { isFunctionComponent } from './isFunctionComponent';

const neverFC: React.FC | string = 'Not FC';
if (isFunctionComponent(neverFC)) {
  const fc: React.FC = neverFC;
} else {
  const notFC: string = neverFC;
}
let maybeFC: React.FC | string = () => <div />;
if (Math.random() > 0.5) {
  maybeFC = 'Not FC';
}
if (isFunctionComponent(maybeFC)) {
  const fc: React.FC = maybeFC;
} else {
  const notFC: string = maybeFC;
}
const definitelyFC: React.FC | string = () => <div />;
if (isFunctionComponent(definitelyFC)) {
  const fc: React.FC = definitelyFC;
} else {
  const notFC: string = definitelyFC;
}
