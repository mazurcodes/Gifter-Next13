import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormLogin from '..';

const user = userEvent.setup();

const email = 'email@example.com';
const password = 'password123';

describe('AuthFormLogin component', () => {
  it('renders login form ', () => {
    render(<AuthFormLogin />);
    const form = within(screen.getByRole('form'));
    expect(form.getByLabelText(/email/i)).toBeDefined();
    expect(form.getByLabelText(/password/i)).toBeDefined();
    expect(form.getByRole('button', { name: /login/i })).toBeDefined();
  });

  it('renders login form with loading button when user is currently logging in', async () => {
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.type(form.getByLabelText(/password/i), password);
    await user.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /loading/i })).toBeDefined();
    });
    cleanup();
  });

  it('renders error message when user state has error', async () => {
    render(<AuthFormLogin />);
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.type(form.getByLabelText(/password/i), password);
    await user.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeDefined();
    });
    cleanup();
  });

  // it('calls login function with email and password from the input fields', async () => {
  //   render(<AuthFormLogin />);

  //   const form = within(screen.getByRole('form'));
  //   const loginInput = form.getByLabelText(/email/i);
  //   const passwordInput = form.getByLabelText(/password/i);
  //   const loginBtn = form.getByRole('button', { name: 'Login' });

  //   await user.type(loginInput, email);
  //   await user.type(passwordInput, password);
  //   await user.click(loginBtn);
  //   await waitFor(() => {
  //     expect(loginMockFn).toBeCalledWith(email, password);
  //     vi.restoreAllMocks();
  //   });
  // });
});
