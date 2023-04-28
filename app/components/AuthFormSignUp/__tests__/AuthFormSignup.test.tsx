import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormRegister from '../../AuthRegister';
import { AuthError } from 'firebase/auth';

const signupMockFn = vi.fn();

const user = userEvent.setup();

describe('AuthFormSignup component', () => {
  it('renders signup form ', () => {
    render(
      <AuthFormRegister
        signupFn={signupMockFn}
        loading={false}
        error={undefined}
      />
    );
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText('Password:')).toBeDefined();
    expect(screen.getByLabelText(/confirm password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Sign up/i })).toBeDefined();
    cleanup();
  });

  it('renders register form with loading button when firebase is creatin new user', () => {
    render(
      <AuthFormRegister
        signupFn={signupMockFn}
        loading={true}
        error={undefined}
      />
    );
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText('Password:')).toBeDefined();
    expect(screen.getByLabelText(/confirm password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /signing/i })).toBeDefined();
    cleanup();
  });

  it('renders error message when user state has error', () => {
    const errorMsg = { message: 'sample error' } as AuthError;
    render(
      <AuthFormRegister
        signupFn={signupMockFn}
        loading={false}
        error={errorMsg}
      />
    );

    expect(screen.getByText(errorMsg.message)).toBeDefined();
    cleanup();
  });

  it('calls login function with email and password from the input fields', async () => {
    const email = 'email@example.com';
    const password = 'password123';
    const confirmPassword = password;

    render(
      <AuthFormRegister
        signupFn={signupMockFn}
        loading={false}
        error={undefined}
      />
    );

    const form = within(screen.getByRole('form'));
    const signupInput = form.getByLabelText(/email/i);
    const passwordInput = form.getByLabelText('Password:');
    const passwordConfirmInput = form.getByLabelText('Confirm password:');
    const signupBtn = form.getByRole('button', { name: 'Sign up' });

    await user.type(signupInput, email);
    await user.type(passwordInput, password);
    await user.type(passwordConfirmInput, confirmPassword);
    await user.click(signupBtn);
    await waitFor(() => {
      expect(signupMockFn).toBeCalledWith(email, password);
      vi.restoreAllMocks();
    });
    cleanup();
  });

  it("shows error when password and confirm password don't match", async () => {
    const email = 'email@example.com';
    const password = 'password123';
    const confirmPassword = 'wrongPassword';

    render(
      <AuthFormRegister
        signupFn={signupMockFn}
        loading={false}
        error={undefined}
      />
    );

    const form = within(screen.getByRole('form'));
    const signupInput = form.getByLabelText(/email/i);
    const passwordInput = form.getByLabelText('Password:');
    const passwordConfirmInput = form.getByLabelText('Confirm password:');
    const signupBtn = form.getByRole('button', { name: 'Sign up' });

    await user.type(signupInput, email);
    await user.type(passwordInput, password);
    await user.type(passwordConfirmInput, confirmPassword);
    await user.click(signupBtn);
    await waitFor(() => {
      expect(form.getByText(/passwords doesn't match/i)).toBeDefined();
    });
    cleanup();
  });
});
