import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormPresenter from '../AuthFormPresenter';
import { User } from 'firebase/auth';

const loginMockFn = vi.fn();
const signupMockFn = vi.fn();

const presenterData = {
  user: null, //{ email: 'email@example.com' } as User,
  loadingAuth: false,
  loadingLogin: false,
  loadingSignup: false,
  errorAuth: undefined,
  errorLogin: undefined,
  errorSignup: undefined,
  loginFn: loginMockFn,
  signupFn: signupMockFn,
};

const user = userEvent.setup();

describe('AuthForm Presenter', () => {
  it('renders register form by default when user is not logged in', () => {
    render(<AuthFormPresenter data={presenterData} />);

    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText('Password:')).toBeDefined();
    expect(screen.getByLabelText('Confirm password:')).toBeDefined();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeDefined();
    expect(
      screen.getByRole('button', { name: /click here to login/i })
    ).toBeDefined();
  });

  it("renders login form when user click 'Already a member' button", async () => {
    await user.click(screen.getByText(/already a member/i));

    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText(/password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /login/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /not a member/i })).toBeDefined();
    cleanup();
  });

  it('renders loading message when user state is loading', () => {
    const data = { ...presenterData, loadingAuth: true };
    render(<AuthFormPresenter data={data} />);
    expect(screen.getByText(/checking user/i)).toBeDefined();
    cleanup();
  });

  it('renders error message when user state has error', () => {
    const errorMsg = 'sample error';
    const data = {
      ...presenterData,
      errorAuth: { message: errorMsg } as Error,
    };
    render(<AuthFormPresenter data={data} />);

    expect(screen.getByText(/there was some error/i)).toBeDefined();
    expect(screen.getByText(errorMsg)).toBeDefined();
    cleanup();
  });

  it('renders confirmation when user has succefully logged in', () => {
    const email = 'email@example.com';
    const data = {
      ...presenterData,
      user: { email } as User,
    };
    render(<AuthFormPresenter data={data} />);

    expect(screen.getByText(email)).toBeDefined();
  });

  // Note: You can write more tests to cover other scenarios as neede
});
