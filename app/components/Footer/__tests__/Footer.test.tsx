import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '..';

describe('Footer component', () => {
  render(<Footer />);
  it('should render footer element', () => {
    expect(screen.getByRole('contentinfo')).toBeDefined();
  });

  it('should have text footer', () => {
    expect(screen.getByText(/This is a footer/)).toBeDefined();
  });
});
