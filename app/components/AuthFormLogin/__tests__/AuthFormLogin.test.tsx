import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormLogin from '..';

const user = userEvent.setup();
const email = 'email@example.com';
const password = 'password123';
const loginFn = vi.fn();

vi.mock('react-firebase-hooks/auth', () => ({
  useSignInWithEmailAndPassword() {
    return [loginFn, false, undefined];
  },
}));

describe('AuthFormReset component', () => {
  render(<AuthFormLogin />);
  const form = within(screen.getByRole('form'));
  const emailInput = form.getByLabelText(/email/i);
  const passwordInput = form.getByLabelText(/password/i);
  const loginBtn = form.getByRole('button', { name: /login/i });

  it('renders reset form', () => {
    expect(form).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginBtn).toBeDefined();
  });

  it('calls sendPasswordResetEmail function with email from the input field', async () => {
    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(loginBtn);
    await waitFor(() => {
      expect(loginFn).toBeCalledWith(email, password);
    });
  });
});
