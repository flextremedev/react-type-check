import {
  getFunctionComponent,
  getClassComponent,
} from '../test-utils/test-utils';
import { isClassComponent } from './isClassComponent';
describe('isFunctionComponent()', () => {
  it('checks if input is a React function component', () => {
    expect(isClassComponent(getClassComponent())).toBe(true);
    expect(isClassComponent(getFunctionComponent())).toBe(false);
  });
});
