import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthFormReset from '..';

const resetFn = vi.fn();
const errorMessage = '(auth/there was an error)';

vi.mock('react-firebase-hooks/auth', () => ({
  useSendPasswordResetEmail() {
    return [resetFn, false, { message: errorMessage } as Error];
  },
}));

describe('AuthFormReset component in error state', () => {
  render(<AuthFormReset />);
  const form = within(screen.getByRole('form'));
  it('renders reset form ', () => {
    expect(form.getByLabelText(/email/i)).toBeDefined();
    expect(form.getByRole('button', { name: /reset/i })).toBeDefined();
    expect(form.getByText(/error/i)).toBeDefined();
  });
});
