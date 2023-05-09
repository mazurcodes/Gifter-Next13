import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Unauthenticated from '..';

describe('InputError component', () => {
  render(<Unauthenticated />);
  it('should display message', () => {
    expect(screen.getByText(/hello stranger/i)).toBeDefined();
  });

  it('should display link to the signup page', () => {
    expect(
      screen.getByRole('link', {
        name: /login or signup/i,
      })
    ).toBeDefined();
  });
});
