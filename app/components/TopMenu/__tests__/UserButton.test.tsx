import { expect, describe, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserButton from '..';

describe('SearchForm component', () => {
  render(<UserButton />);
  const wrapper = within(screen.getByRole('presentation'));
  const button = within(wrapper.getByRole('menuitem'));
  const user = userEvent.setup();

  it('should render form', () => {
    expect(button).toBeDefined();
  });

  it('should have image within button', () => {
    expect(button.getByAltText(/user account icon/i)).toBeDefined();
  });

  it('should show the UserMenu component after click ', async () => {
    await user.click(wrapper.getByRole('menuitem'));
    await waitFor(() => {
      const menu = within(wrapper.getByRole('menu'));
      expect(
        menu.getByRole('heading', { level: 3, name: /account/i })
      ).toBeDefined();
      expect(
        menu.getByRole('heading', { level: 3, name: /gifter/i })
      ).toBeDefined();
    });
  });

  it('should hide the UserMenu component after second click', async () => {
    await user.click(wrapper.getByRole('menuitem'));
    await waitFor(() => {
      expect(screen.queryByRole('heading')).toBeNull();
    });
  });

  it('should hide the UserMenu when user clicked away from the wrapper', async () => {
    //first click on the UserMenu to open it again
    await user.click(wrapper.getByRole('menuitem'));
    //check if the UserMenu is already visible
    await waitFor(() => {
      const menu = within(wrapper.getByRole('menu'));
      expect(
        menu.getByRole('heading', { level: 3, name: /account/i })
      ).toBeDefined();
    });

    // now click away from the UserMenu
    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByRole('heading')).toBeNull();
    });
  });
});
