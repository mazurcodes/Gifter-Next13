import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormRegister from '..';

const user = userEvent.setup();

const email = 'email@example.com';
const password = 'password123';

describe('AuthFormRegister component', () => {
  it('renders signup form ', () => {
    render(<AuthFormRegister />);
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText('Password:')).toBeDefined();
    expect(screen.getByLabelText(/confirm password/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Sign up/i })).toBeDefined();
  });

  it('renders register form with loading button when firebase is creating new user', async () => {
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.type(form.getByLabelText('Password:'), password);
    await user.type(form.getByLabelText(/confirm/i), password);
    await user.click(screen.getByRole('button', { name: /sign up/i }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /signing/i })).toBeDefined();
    });
    cleanup();
  });

  it('renders error message when user state has error', async () => {
    render(<AuthFormRegister />);
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.type(form.getByLabelText('Password:'), password);
    await user.type(form.getByLabelText(/confirm/i), password);
    await user.click(screen.getByRole('button', { name: /sign up/i }));
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeDefined();
    });
    cleanup();
  });

  // it('calls createUserWithEmailAndPassword function with email and password from the input fields', async () => {
  //   const email = 'email@example.com';
  //   const password = 'password123';
  //   const confirmPassword = password;

  //   render(<AuthFormRegister />);

  //   const form = within(screen.getByRole('form'));
  //   const signupInput = form.getByLabelText(/email/i);
  //   const passwordInput = form.getByLabelText('Password:');
  //   const passwordConfirmInput = form.getByLabelText('Confirm password:');
  //   const signupBtn = form.getByRole('button', { name: 'Sign up' });

  //   await user.type(signupInput, email);
  //   await user.type(passwordInput, password);
  //   await user.type(passwordConfirmInput, confirmPassword);
  //   await user.click(signupBtn);
  //   await waitFor(() => {
  //     expect(signupMockFn).toBeCalledWith(email, password);
  //     vi.restoreAllMocks();
  //   });
  //   cleanup();
  // });

  // it("shows error when password and confirm password don't match", async () => {
  //   const email = 'email@example.com';
  //   const password = 'password123';
  //   const confirmPassword = 'wrongPassword';

  //   render(<AuthFormRegister />);

  //   const form = within(screen.getByRole('form'));
  //   const signupInput = form.getByLabelText(/email/i);
  //   const passwordInput = form.getByLabelText('Password:');
  //   const passwordConfirmInput = form.getByLabelText('Confirm password:');
  //   const signupBtn = form.getByRole('button', { name: 'Sign up' });

  //   await user.type(signupInput, email);
  //   await user.type(passwordInput, password);
  //   await user.type(passwordConfirmInput, confirmPassword);
  //   await user.click(signupBtn);
  //   await waitFor(() => {
  //     expect(form.getByText(/passwords doesn't match/i)).toBeDefined();
  //   });
  //   cleanup();
  // });
});
