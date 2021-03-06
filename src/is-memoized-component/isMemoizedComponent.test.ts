import {
  getFunctionComponent,
  getClassComponent,
  getMemoizedComponent,
} from '../test-utils/testUtils';
import { isMemoizedComponent } from './isMemoizedComponent';
describe('isFunctionComponent()', () => {
  it('checks if input is a React.memo memoized function component', () => {
    expect(isMemoizedComponent(getMemoizedComponent())).toBe(true);
    expect(isMemoizedComponent(getFunctionComponent())).toBe(false);
    expect(isMemoizedComponent(getClassComponent())).toBe(false);
    expect(isMemoizedComponent('string')).toBe(false);
    expect(isMemoizedComponent({})).toBe(false);
    expect(isMemoizedComponent({ $$typeof: 'not a symbol' })).toBe(false);
  });
});
