import {
  getFunctionComponent,
  getClassComponent,
  getMemoizedComponent,
} from '../test-utils/testUtils';
import { isReactComponent } from './isReactComponent';
describe('isReactComponent()', () => {
  it('should check if input is a React class/function component', () => {
    expect(isReactComponent(getFunctionComponent())).toBe(true);
    expect(isReactComponent(getClassComponent())).toBe(true);
    expect(isReactComponent(getMemoizedComponent())).toBe(true);
  });
});
