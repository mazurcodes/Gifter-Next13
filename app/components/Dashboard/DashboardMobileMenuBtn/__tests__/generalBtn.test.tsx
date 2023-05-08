import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashboardMobileMenuBtn from '..';

it('renders button with General name on /dashoboard route', () => {
  vi.mock('next/navigation', () => ({
    usePathname() {
      return '/dashboard';
    },
  }));

  describe('DashboardMobileMenuBtn component', () => {
    render(<DashboardMobileMenuBtn />);
    expect(screen.getByText(/general/i)).toBeDefined();
  });
});
