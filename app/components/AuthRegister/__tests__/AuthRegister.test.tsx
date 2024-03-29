import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormRegister from '..';

const user = userEvent.setup();

const email = 'email@example.com';
const password = 'password123';

const signupFn = vi.fn();

vi.mock('react-firebase-hooks/auth', () => ({
  useCreateUserWithEmailAndPassword() {
    return [signupFn, , false, undefined];
  },
}));

describe('AuthFormRegister component', () => {
  render(<AuthFormRegister />);
  const form = within(screen.getByRole('form'));
  const emailInput = form.getByLabelText(/email/i);
  const passwordInput = form.getByLabelText(/Password/);
  const confirmPasswordInput = form.getByLabelText(/confirm password/i);
  const signupBtn = form.getByRole('button', { name: /Sign up/i });

  it('renders signup form ', () => {
    expect(form).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(confirmPasswordInput).toBeDefined();
    expect(signupBtn).toBeDefined();
  });

  it('calls createUserWithEmailAndPassword function with email and password from the input fields', async () => {
    const confirmPassword = password;

    render(<AuthFormRegister />);

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.type(confirmPasswordInput, confirmPassword);
    await user.click(signupBtn);
    await waitFor(() => {
      expect(signupFn).toBeCalledWith(email, password);
      vi.restoreAllMocks();
    });
  });
});
