import { userEvent } from '@storybook/testing-library';
import { renderCopmonents } from 'shared/lib/tests/renderComponents/renderComponents';
import { screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', () => {
    renderCopmonents(<Counter />, { initialState: { counter: { value: 0 } } });
    expect(screen.getByTestId('counter-header')).toHaveTextContent('0');
  });
  test('increment', () => {
    renderCopmonents(<Counter />, { initialState: { counter: { value: 0 } } });
    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-header')).toHaveTextContent('1');
  });
  test('decrement', () => {
    renderCopmonents(<Counter />, { initialState: { counter: { value: 0 } } });
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-header')).toHaveTextContent('-1');
  });
});
