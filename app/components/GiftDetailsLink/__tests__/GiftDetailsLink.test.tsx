import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GiftDetailsLink from '..';

const dummyLink = 'http://exampleOne.com';

describe('Gift component', () => {
  render(<GiftDetailsLink link={dummyLink} />);

  it('should be rendered with dummy link', () => {
    expect(screen.getByText(/link:/i)).toBeDefined();
    expect(screen.getByRole('link', { name: dummyLink })).toBeDefined();
  });
});
