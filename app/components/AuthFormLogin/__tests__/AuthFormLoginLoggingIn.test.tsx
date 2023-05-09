import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthFormLogin from '..';

const loginFn = vi.fn();

vi.mock('react-firebase-hooks/auth', () => ({
  useSignInWithEmailAndPassword() {
    return [loginFn, , true, undefined];
  },
}));

describe('AuthFormReset component in resetting state', () => {
  render(<AuthFormLogin />);
  const form = within(screen.getByRole('form'));
  const loginBtn = form.getByRole('button', { name: /loading/i });

  it('renders login form with loading button ', () => {
    expect(form).toBeDefined();
    expect(loginBtn).toBeDefined();
  });
});
