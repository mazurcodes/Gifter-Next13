import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormLogin from '..';
import { AuthError } from 'firebase/auth';

const loginMockFn = vi.fn();

const user = userEvent.setup();

describe('AuthForm Presenter', () => {
  it('renders login form ', () => {
    render(
      <AuthFormLogin loginFn={loginMockFn} loading={false} error={undefined} />
    );
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText(/password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /login/i })).toBeDefined();
    cleanup();
  });

  it('renders login form with loading button when user is currently logging in', () => {
    render(
      <AuthFormLogin loginFn={loginMockFn} loading={true} error={undefined} />
    );
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText(/password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /loading/i })).toBeDefined();
    cleanup();
  });

  it('renders error message when user state has error', () => {
    const errorMsg = { message: 'sample error' } as AuthError;
    render(
      <AuthFormLogin loginFn={loginMockFn} loading={false} error={errorMsg} />
    );

    expect(screen.getByText(errorMsg.message)).toBeDefined();
    cleanup();
  });

  it('calls login function with email and password from the input fields', async () => {
    const email = 'email@example.com';
    const password = 'password123';

    render(
      <AuthFormLogin loginFn={loginMockFn} loading={false} error={undefined} />
    );

    const form = within(screen.getByRole('form'));
    const loginInput = form.getByLabelText(/email/i);
    const passwordInput = form.getByLabelText(/password/i);
    const loginBtn = form.getByRole('button', { name: 'Login' });

    await user.type(loginInput, email);
    await user.type(passwordInput, password);
    await user.click(loginBtn);
    await waitFor(() => {
      expect(loginMockFn).toBeCalledWith(email, password);
      vi.restoreAllMocks();
    });
  });
});
