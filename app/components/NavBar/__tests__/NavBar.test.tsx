import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '..';

describe('NavBar component', () => {
  render(<NavBar />);
  it('should render navigation', () => {
    expect(screen.getByRole('navigation')).toBeDefined();
  });
});
