import { expect, describe, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TopMenuUser from '@/components/TopMenuUser';

const dummyEmail = 'example@example.com';
const closeFn = vi.fn();
const signOutFn = vi.fn();

vi.mock('next/navigation', () => require('next-router-mock'));
vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState() {
    return [{ email: dummyEmail }, false, undefined];
  },
  useSignOut() {
    return [signOutFn];
  },
}));

describe('TopMenuUser component', async () => {
  render(<TopMenuUser close={closeFn} />);
  const menu = within(screen.getByRole('menu'));

  it('should render menu', () => {
    expect(menu).toBeDefined();
  });

  it('should have 2 headings within the menu', () => {
    expect(
      menu.getByRole('heading', { level: 3, name: /account/i })
    ).toBeDefined();
    expect(
      menu.getByRole('heading', { level: 3, name: /gifter/i })
    ).toBeDefined();
  });

  it('should have 4 links within the menu', () => {
    expect(menu.queryAllByRole('link').length === 4).toBeTruthy();
  });
});
