import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GiftError from '..';

describe('GiftError component', () => {
  render(<GiftError />);
  it('should render an error screen', () => {
    expect(
      screen.getByText(/Sorry, no gift with this ID was found in our database/i)
    );
  });
});
