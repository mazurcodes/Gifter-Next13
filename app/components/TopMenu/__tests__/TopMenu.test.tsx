import { expect, describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TopMenu from '..';

describe('TopMenu component', () => {
  render(<TopMenu />);
  const wrapper = within(screen.getByRole('menubar'));

  it('should render UserButton component', () => {
    expect(wrapper.queryByRole('menuitem')).toBeDefined();
  });
});
