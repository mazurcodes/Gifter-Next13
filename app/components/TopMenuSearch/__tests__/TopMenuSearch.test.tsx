import { expect, describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TopMenuSearch from '@/components/TopMenuSearch';

describe('SearchForm component', () => {
  render(<TopMenuSearch />);
  const searchbox = within(screen.getByRole('searchbox'));

  it('should render menu', () => {
    expect(searchbox).toBeDefined();
  });

  it('should have 2 headings within the menu', () => {
    expect(searchbox.getByLabelText(/user wishlist/i)).toBeDefined();
    expect(searchbox.getByRole('button', {name: /search/i})).toBeDefined();
  });
});
