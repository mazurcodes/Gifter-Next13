import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashboardMobileMenuBtn from '..';

it('renders button with Summary name on /dashoboard/summary route', () => {
  vi.mock('next/navigation', () => ({
    usePathname() {
      return '/dashboard/summary';
    },
  }));

  describe('DashboardMobileMenuBtn component', () => {
    render(<DashboardMobileMenuBtn />);
    expect(screen.getByText(/summary/i)).toBeDefined();
  });
});
