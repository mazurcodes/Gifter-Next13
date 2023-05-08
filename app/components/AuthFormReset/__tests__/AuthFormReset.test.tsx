import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormReset from '..';

const user = userEvent.setup();

const email = 'email@example.com';

describe('AuthFormReset component', () => {
  it('renders reset form ', () => {
    render(<AuthFormReset />);
    const form = within(screen.getByRole('form'));
    expect(form.getByLabelText(/email/i)).toBeDefined();
    expect(form.getByRole('button', { name: /reset/i })).toBeDefined();
  });

  it('renders reset form and when user clicks reset button it changes name to reseting', async () => {
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.click(screen.getByRole('button', { name: /reset/i }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /reseting/i })).toBeDefined();
    });
    cleanup();
  });

  it('renders error message when user state has error', async () => {
    render(<AuthFormReset />);
    const form = within(screen.getByRole('form'));
    await user.type(form.getByLabelText(/email/i), email);
    await user.click(screen.getByRole('button', { name: /reset/i }));
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeDefined();
    });
    cleanup();
  });

  // it('calls sendPasswordResetEmail function with email from the input field', async () => {
  //   render(<AuthFormReset />);

  //   const form = within(screen.getByRole('form'));
  //   const emailInput = form.getByLabelText(/email/i);
  //   const resetBtn = form.getByRole('button', { name: /reset/i });

  //   await user.type(emailInput, email);
  //   await user.click(resetBtn);
  //   await waitFor(() => {
  //     expect(resetMockFn).toBeCalledWith(email);
  //     vi.restoreAllMocks();
  //   });
  // });
});
