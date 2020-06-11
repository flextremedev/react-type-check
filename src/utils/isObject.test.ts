import { isObject } from './isObject';

describe('isObject()', () => {
  const num = 1;
  const str = '1';
  const obj = { num, str };
  const func = (): Record<string, unknown> => ({});
  it.each`
    type           | value        | expected
    ${'number'}    | ${num}       | ${false}
    ${'string'}    | ${str}       | ${false}
    ${'object'}    | ${obj}       | ${true}
    ${'function'}  | ${func}      | ${false}
    ${'null'}      | ${null}      | ${false}
    ${'undefined'} | ${undefined} | ${false}
  `('should return $expected for $type', ({ value, expected }) => {
    expect(isObject(value)).toBe(expected);
  });
});
