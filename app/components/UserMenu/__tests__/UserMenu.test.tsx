import { expect, describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import UserMenu from '@/components/UserMenu';

describe('SearchForm component', () => {
  render(<UserMenu />);
  const menu = within(screen.getByRole('menu'));

  it('should render menu', () => {
    expect(menu).toBeDefined();
  });

  it('should have 2 headings within the menu', () => {
    expect(menu.getByRole('heading', {level: 3, name: /account/i})).toBeDefined();
    expect(menu.getByRole('heading', {level: 3, name: /gifter/i})).toBeDefined();
  });
  it('should have 4 links within the menu', () => {
    expect(menu.queryAllByRole('link').length === 4).toBeTruthy();
  });
  
});
