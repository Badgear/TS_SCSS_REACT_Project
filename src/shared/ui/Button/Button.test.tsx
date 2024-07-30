/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('is rendering', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('is Clear', () => {
    render(<Button theme={ThemeButton.Clear}>Hello</Button>);
    expect(screen.getByText('Hello')).toHaveClass('clear');
    screen.debug();
  });
});
