import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AuthFormReset from '..';

const user = userEvent.setup();
const email = 'email@example.com';
const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};
const resetFn = vi.fn();

vi.mock('react-firebase-hooks/auth', () => ({
  useSendPasswordResetEmail() {
    return [resetFn, false, undefined];
  },
}));

describe('AuthFormReset component', () => {
  render(<AuthFormReset />);
  const form = within(screen.getByRole('form'));
  const emailInput = form.getByLabelText(/email/i);
  const resetBtn = form.getByRole('button', { name: /reset/i });

  it('renders reset form with button', () => {
    expect(form).toBeDefined();
    expect(form.getByRole('button', { name: /reset/i })).toBeDefined();
  });

  it('calls sendPasswordResetEmail function with email from the input field', async () => {
    await user.type(emailInput, email);
    await user.click(resetBtn);
    await waitFor(() => {
      expect(resetFn).toBeCalledWith(email, actionCodeSettings);
    });
  });
});
