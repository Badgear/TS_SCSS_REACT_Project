import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter()', () => {
  test('should return the correct value', () => {
    const state:DeepPartial<StateSchema> = {
      counter: { value: 1 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
  });
});
