import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice.test', () => {
  test('increment', () => {
    const state:CounterSchema = {
      value: 1,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 2 });
  });
  test('decrement', () => {
    const state:CounterSchema = {
      value: 1,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 0 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
