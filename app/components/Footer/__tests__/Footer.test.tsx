import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '..';

const currentYear = new Date().getFullYear() + '';

describe('Footer component', () => {
  render(<Footer />);
  it('should render footer element', () => {
    expect(screen.getByRole('contentinfo')).toBeDefined();
  });

  it('should have current date', () => {
    expect(screen.getByText(new RegExp(currentYear))).toBeDefined();
  });

  it('should have link to dev website', () => {
    expect(
      screen.getByRole('link', { name: /bartekmazur.dev/i })
    ).toBeDefined();
  });
});
