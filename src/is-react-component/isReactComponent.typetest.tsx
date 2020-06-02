import React from 'react';
import { isReactComponent } from './isReactComponent';
import { getFunctionComponent } from '../test-utils/testUtils';

const neverRC: React.ComponentType | string = 'Not RC';
if (isReactComponent(neverRC)) {
  const rc: React.ComponentType = neverRC;
} else {
  const notRC: string = neverRC;
}
let maybeRC: React.ComponentType | string = getFunctionComponent();
if (Math.random() > 0.5) {
  maybeRC = 'Not RC';
}
if (isReactComponent(maybeRC)) {
  const rc: React.ComponentType = maybeRC;
} else {
  const notRC: string = maybeRC;
}
const definitelyRC: React.ComponentType | string = getFunctionComponent();
if (isReactComponent(definitelyRC)) {
  const rc: React.ComponentType = definitelyRC;
} else {
  const notRC: string = definitelyRC;
}
