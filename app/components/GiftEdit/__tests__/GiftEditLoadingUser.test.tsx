import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import GiftEdit from '@/components/GiftEdit';

vi.mock('next/navigation', () => require('next-router-mock'));
vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState() {
    return [undefined, true, undefined];
  },
}));

describe('GiftEdit component when user is currently loging in', () => {
  render(<GiftEdit />);

  it('should render loading state', () => {
    expect(screen.getByText(/Checking user.../i));
  });
});
