import { expect, describe, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '..';

describe('NavBar component on main page', () => {
  render(<NavBar />);

  it('should render navigation', () => {
    expect(screen.getByRole('navigation')).toBeDefined();
  });
  it('should not render link to the main page', () => {
    expect(screen.getByTestId('navbar main')).toBeDefined();
  });

  it('should render link to the profile page', () => {
    expect(screen.getByTestId('navbar profile')).toBeDefined();
  });
});
