import { expect, describe, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TopMenuUser from '@/components/TopMenuUser';
const closeFn = vi.fn();
const signOutFn = vi.fn();

vi.mock('next/navigation', () => require('next-router-mock'));
vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState() {
    return [undefined, false, undefined];
  },
  useSignOut() {
    return [signOutFn];
  },
}));

describe('TopMenuUser component', async () => {
  render(<TopMenuUser close={closeFn} />);
  const menu = within(screen.getByRole('menu'));
  const signupBtn = menu.getByRole('link', { name: /sign up/i });

  it('should render menu', () => {
    expect(menu).toBeDefined();
  });

  it('should have Sign Up link', () => {
    expect(signupBtn).toBeDefined();
  });
});
