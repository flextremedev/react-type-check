import React from 'react';
import { isClassComponent } from './isClassComponent';
import { getClassComponent } from '../test-utils/testUtils';

const neverCC: React.ComponentClass | string = 'Not CC';
if (isClassComponent(neverCC)) {
  const cc: React.ComponentClass = neverCC;
} else {
  const notCC: string = neverCC;
}
let maybeCC: React.ComponentClass | string = getClassComponent();
if (Math.random() > 0.5) {
  maybeCC = 'Not CC';
}
if (isClassComponent(maybeCC)) {
  const cc: React.ComponentClass = maybeCC;
} else {
  const notCC: string = maybeCC;
}
const definitelyCC: React.ComponentClass | string = getClassComponent();
if (isClassComponent(definitelyCC)) {
  const cc: React.ComponentClass = definitelyCC;
} else {
  const notCC: string = definitelyCC;
}
