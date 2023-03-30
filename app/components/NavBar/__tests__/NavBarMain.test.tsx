import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBarMain from '../NavBarMain';

describe('NavBar component on search page', () => {
  render(<NavBarMain />);

  it('should render navigation', () => {
    expect(screen.getByRole('navigation')).toBeDefined();
  });
  it('should not render link to the main page', () => {
    expect(screen.queryByTestId('navbar search')).toBeNull();
  });

  it('should render link to the profile page', () => {
    expect(screen.getByTestId('navbar profile')).toBeDefined();
  });
});
