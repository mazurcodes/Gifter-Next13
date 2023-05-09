import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormRegister from '..';

const user = userEvent.setup();

const errorMessage = '(auth/there was an error)';

vi.mock('react-firebase-hooks/auth', () => ({
  useCreateUserWithEmailAndPassword() {
    return [undefined, , false, { message: errorMessage } as Error];
  },
}));

describe('AuthFormReset component in error state', () => {
  render(<AuthFormRegister />);
  const form = within(screen.getByRole('form'));
  const emailInput = form.getByLabelText(/email/i);
  const passwordInput = form.getByLabelText(/Password/);
  const confirmPasswordInput = form.getByLabelText(/confirm password/i);
  const signupBtn = form.getByRole('button', { name: /Sign up/i });

  it('renders Signup form with error message', () => {
    expect(form.getByText(/error/i)).toBeDefined();
  });

  it("shows error when password and confirm password don't match", async () => {
    const email = 'email@example.com';
    const password = 'password123';
    const confirmPassword = 'wrongPassword';

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.type(confirmPasswordInput, confirmPassword);
    await user.click(signupBtn);
    await waitFor(() => {
      expect(form.getByText(/passwords/i)).toBeDefined();
    });
  });
});
