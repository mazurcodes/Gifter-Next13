import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '..';

describe('Footer component', () => {
  it('should render', () => {
    render(<Footer />);
  });

  it('should have text footer', () => {
    expect(screen.getByText(/This is a footer/))
  });
});
