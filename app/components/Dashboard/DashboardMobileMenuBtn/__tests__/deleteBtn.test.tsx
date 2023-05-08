import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashboardMobileMenuBtn from '..';

it('renders button with Delete name on /dashoboard/delete route', () => {
  vi.mock('next/navigation', () => ({
    usePathname() {
      return '/dashboard/delete';
    },
  }));

  describe('DashboardMobileMenuBtn component', () => {
    render(<DashboardMobileMenuBtn />);
    expect(screen.getByText(/delete/i)).toBeDefined();
  });
});
