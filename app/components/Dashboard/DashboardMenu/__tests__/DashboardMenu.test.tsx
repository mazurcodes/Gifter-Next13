import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DashboardMenu from '..';

describe('AuthFormReset component', () => {
  render(<DashboardMenu />);
  const nav = within(screen.getByRole('navigation'));
  const dashboardLink = nav.getAllByRole('link', { name: 'General' });
  const passwordLink = nav.getAllByRole('link', { name: 'Password' });
  const wishlistLink = nav.getAllByRole('link', { name: 'Wishlist' });
  const statisticsLink = nav.getAllByRole('link', { name: 'Statistics' });
  const deleteLink = nav.getAllByRole('link', { name: 'Delete account' });

  it('renders dashboard navigation', () => {
    expect(nav).toBeDefined();
  });

  it('renders 5 links inside menu', () => {
    expect(dashboardLink).toBeDefined();
    expect(passwordLink).toBeDefined();
    expect(wishlistLink).toBeDefined();
    expect(statisticsLink).toBeDefined();
    expect(deleteLink).toBeDefined();
  });
});
