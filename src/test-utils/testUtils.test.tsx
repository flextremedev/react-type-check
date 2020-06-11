import {
  getFunctionComponent,
  getClassComponent,
  getMemoizedComponent,
} from './testUtils';

describe('getFunctionComponent()', () => {
  it('returns a function component', () => {
    expect(/I'm a function/.test(String(getFunctionComponent()))).toBe(true);
  });
});

describe('getClassComponent()', () => {
  it('returns a class component', () => {
    expect(/I'm a class/.test(String(getClassComponent()))).toBe(true);
  });
});
describe('getMemoizedComponent()', () => {
  it('returns a React.memo memoized component', () => {
    expect(getMemoizedComponent().$$typeof.toString()).toEqual(
      'Symbol(react.memo)'
    );
  });
});
