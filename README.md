# react-type-check [![Build Status](https://travis-ci.com/flextremedev/react-type-check.svg?branch=master)](https://travis-ci.com/flextremedev/react-type-check) [![codecov](https://codecov.io/gh/flextremedev/react-type-check/branch/master/graph/badge.svg)](https://codecov.io/gh/flextremedev/react-type-check)

Type checking utilities for React elements.

## The problem

There cases when you want to check if a value is a React component. You might even want it to be typeguarded. Checking for React components isn't trivial at all. For example it depends on which JavaScript syntax you're using.

## The solution

`react-type-check` checks if the value is some sort of a React component and also tells Typescript if it is.

## Getting started

Install this package as a dependency:

```
yarn add react-type-check
```

or

```
npm install --save react-type-check
```

> NOTE: Make sure to have React version >= 16.8.0 installed as a dependency.

## Usage

After installing you can use it as follows:

```js
// JavaScript
import { isReactComponent } from 'react-type-check';
let maybeRC = () => <div>I'm a React component</div>;
if (Math.random() > 0.5) {
  maybeRC = 'Not RC';
}
if (isReactComponent(maybeRC)) {
  const definitelyRC = maybeRC;
} else {
  const notRC = maybeRC;
}
```

```tsx
// Typescript
import { isReactComponent } from 'react-type-check';
let maybeRC: React.ComponentType | string = () => (
  <div>I'm a React component</div>
);
if (Math.random() > 0.5) {
  maybeRC = 'Not RC';
}
if (isReactComponent(maybeRC)) {
  const definitelyRC: React.ComponentType = maybeRC;
} else {
  const notRC: string = maybeRC;
}
```
