import {
  getFunctionComponent,
  getClassComponent,
} from '../test-utils/test-utils';
import { isFunctionComponent } from './isFunctionComponent';
describe('isFunctionComponent()', () => {
  it('checks if input is a React function component', () => {
    expect(isFunctionComponent(getFunctionComponent())).toBe(true);
    expect(isFunctionComponent(getClassComponent())).toBe(false);
  });
});
