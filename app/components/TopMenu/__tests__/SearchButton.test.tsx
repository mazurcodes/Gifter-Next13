import { expect, describe, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchButton from '@/components/TopMenu/SearchButton';

vi.mock('next/navigation', () => require('next-router-mock'));

describe('SearchButton component', () => {
  render(<SearchButton />);
  const wrapper = within(screen.getByRole('presentation'));
  const button = within(wrapper.getByRole('menuitem'));
  const user = userEvent.setup();

  it('should render button', () => {
    expect(button).toBeDefined();
  });

  it('should have image within button', () => {
    expect(button.getByAltText(/search icon/i)).toBeDefined();
  });

  it('should show the TopMenuSearch component after click ', async () => {
    await user.click(wrapper.getByRole('menuitem'));
    await waitFor(() => {
      expect(wrapper.getByRole('searchbox')).toBeDefined();
    });
  });

  it('should hide the TopMenuSearch component after second click', async () => {
    await user.click(wrapper.getByRole('menuitem'));
    await waitFor(() => {
      expect(screen.queryByRole('searchbox')).toBeNull();
    });
  });

  it('should hide the TopMenuSearch when user clicked away from the wrapper', async () => {
    //first click on the UserMenu to open it again
    await user.click(wrapper.getByRole('menuitem'));
    //check if the UserMenu is already visible
    await waitFor(() => {
      expect(wrapper.getByRole('searchbox')).toBeDefined();
    });

    // now click away from the UserMenu
    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByRole('searchbox')).toBeNull();
    });
  });
});
