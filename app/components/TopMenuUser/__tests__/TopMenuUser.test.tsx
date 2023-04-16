import { expect, describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TopMenuUser from '@/components/TopMenuUser';
import {
  signInAnonymously,
  connectAuthEmulator,
} from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

connectAuthEmulator(auth, 'http://localhost:9099');

describe('SearchForm component', async () => {
  await signInAnonymously(auth);
  render(<TopMenuUser />);
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
