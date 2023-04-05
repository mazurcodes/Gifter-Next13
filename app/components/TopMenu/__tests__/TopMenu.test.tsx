import { expect, describe, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import TopMenu from '..';

describe('TopMenu component', () => {
  it('should render Basic TopMenu with UserButton component', () => {
    render(<TopMenu />);
    const wrapper = within(screen.getByRole('menubar'));
    expect(wrapper.queryByRole('menuitem')).toBeDefined();
    cleanup();
  });

  it('should render Extended TopMenu with Logo and 2 menuitems: SearchButton, UserButton', () => {
    render(<TopMenu extended />);
    const wrapper = within(screen.getByRole('menubar'));
    expect(
      wrapper.queryByRole('heading', { level: 2, name: /gifter/i })
    ).toBeDefined();
    expect(wrapper.queryAllByRole('menuitem').length).toBe(2);
    cleanup();
  });
});
