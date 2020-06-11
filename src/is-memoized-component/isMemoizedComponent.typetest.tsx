import React from 'react';
import { isMemoizedComponent } from './isMemoizedComponent';
import { getMemoizedComponent } from '../test-utils/testUtils';

const neverMC: React.MemoExoticComponent<React.ComponentType> | string =
  'Not MC';
if (isMemoizedComponent(neverMC)) {
  const mc: React.MemoExoticComponent<React.ComponentType> = neverMC;
} else {
  const notMC: string = neverMC;
}

let maybeMC:
  | React.MemoExoticComponent<React.ComponentType>
  | string = getMemoizedComponent();
if (Math.random() > 0.5) {
  maybeMC = 'Not MC';
}
if (isMemoizedComponent(maybeMC)) {
  const mc: React.MemoExoticComponent<React.ComponentType> = maybeMC;
} else {
  const notMC: string = maybeMC;
}

const definitelyMC:
  | React.MemoExoticComponent<React.ComponentType>
  | string = getMemoizedComponent();
if (isMemoizedComponent(definitelyMC)) {
  const mc: React.MemoExoticComponent<React.ComponentType> = definitelyMC;
} else {
  const notMC: string = definitelyMC;
}
