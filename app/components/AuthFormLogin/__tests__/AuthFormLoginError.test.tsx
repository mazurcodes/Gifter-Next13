import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthFormLogin from '..';
const resetFn = vi.fn();

const errorMessage = '(auth/there was an error)';

vi.mock('react-firebase-hooks/auth', () => ({
  useSignInWithEmailAndPassword() {
    return [resetFn, , false, { message: errorMessage } as Error];
  },
}));

describe('AuthFormLogin component in error state', () => {
  render(<AuthFormLogin />);
  const form = within(screen.getByRole('form'));

  it('renders reset form with error message', () => {
    expect(form.getByText(/error/i)).toBeDefined();
  });
});
