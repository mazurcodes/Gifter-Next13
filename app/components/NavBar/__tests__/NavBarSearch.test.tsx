import { expect, describe, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBarSearch from '..';

describe('NavBar component on NOT search page', () => {
  render(<NavBarSearch />);

  it('should render navigation', () => {
    expect(screen.getByRole('navigation')).toBeDefined();
  });
  it('should render link to the search page', () => {
    expect(screen.getByTestId('navbar search')).toBeDefined();
  });

  it('should render link to the profile page', () => {
    expect(screen.getByTestId('navbar profile')).toBeDefined();
  });
});