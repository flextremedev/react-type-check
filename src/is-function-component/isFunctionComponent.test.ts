import {
  getFunctionComponent,
  getClassComponent,
  getMemoizedComponent,
} from '../test-utils/testUtils';
import { isFunctionComponent } from './isFunctionComponent';
describe('isFunctionComponent()', () => {
  it('checks if input is a React function component', () => {
    expect(isFunctionComponent(getFunctionComponent())).toBe(true);
    expect(isFunctionComponent(getClassComponent())).toBe(false);
    expect(isFunctionComponent(getMemoizedComponent())).toBe(false);
  });
});
