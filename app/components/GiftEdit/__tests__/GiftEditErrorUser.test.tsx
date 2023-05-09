import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import GiftEdit from '@/components/GiftEdit';

vi.mock('next/navigation', () => require('next-router-mock'));
vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState() {
    return [undefined, false, { message: 'no user' } as Error];
  },
}));

describe('GiftEdit component when user is logged in', () => {
  render(<GiftEdit />);

  it('should render error', () => {
    expect(screen.getByText(/There was same error with your credentials.../i));
  });
});
