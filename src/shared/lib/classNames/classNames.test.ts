import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('cls', {}, [])).toBe('cls');
  });

  test('add params', () => {
    const expected = 'cls cls2 cls3';
    expect(classNames('cls', {}, ['cls2', 'cls3'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'cls cls2 cls3 hovered';
    expect(classNames('cls', { hovered: true }, ['cls2', 'cls3'])).toBe(
      expected
    );
  });

  test('with mods false', () => {
    const expected = 'cls cls2 cls3';
    expect(classNames('cls', { hovered: false }, ['cls2', 'cls3'])).toBe(
      expected
    );
  });
});
