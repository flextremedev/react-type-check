import {
  getFunctionComponent,
  getClassComponent,
  getMemoizedComponent,
} from '../test-utils/testUtils';
import { isClassComponent } from './isClassComponent';
describe('isFunctionComponent()', () => {
  it('checks if input is a React function component', () => {
    expect(isClassComponent(getClassComponent())).toBe(true);
    expect(isClassComponent(getFunctionComponent())).toBe(false);
    expect(isClassComponent(getMemoizedComponent())).toBe(false);
  });
});
