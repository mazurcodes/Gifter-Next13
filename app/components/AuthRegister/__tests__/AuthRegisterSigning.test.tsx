import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthFormLogin from '..';

vi.mock('react-firebase-hooks/auth', () => ({
  useCreateUserWithEmailAndPassword() {
    return [undefined, , true, undefined];
  },
}));

describe('AuthFormRegister component in resetting state', () => {
  render(<AuthFormLogin />);
  const form = within(screen.getByRole('form'));
  const loginBtn = form.getByRole('button', { name: /signing.../i });

  it('renders login form with Signing... button ', () => {
    expect(form).toBeDefined();
    expect(loginBtn).toBeDefined();
  });
});
