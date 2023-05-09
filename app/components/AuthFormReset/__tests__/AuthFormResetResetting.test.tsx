import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthFormReset from '..';

const resetFn = vi.fn();

vi.mock('react-firebase-hooks/auth', () => ({
  useSendPasswordResetEmail() {
    return [resetFn, true, undefined];
  },
}));

describe('AuthFormReset component in resetting state', () => {
  render(<AuthFormReset />);
  const form = within(screen.getByRole('form'));
  const emailInput = form.getByLabelText(/email/i);
  const resetBtn = form.getByRole('button', { name: /resetting/i });

  it('renders reset form with resetting button ', () => {
    render(<AuthFormReset />);
    expect(form).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(resetBtn).toBeDefined();
  });
});
