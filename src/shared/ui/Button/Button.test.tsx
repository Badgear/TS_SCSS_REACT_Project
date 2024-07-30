/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('is rendering', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
