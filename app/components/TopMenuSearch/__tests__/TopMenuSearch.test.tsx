import { expect, describe, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import TopMenuSearch from '@/components/TopMenuSearch';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

vi.mock('next/navigation', () => require('next-router-mock'));

const user = userEvent.setup();
const email = 'example@example.com';

const closeFn = vi.fn();

describe('TopMenuSearch component', () => {
  render(<TopMenuSearch close={closeFn} />);
  const searchbox = within(screen.getByRole('searchbox'));
  const label = searchbox.getByLabelText(/user wishlist/i);
  const emailInput = searchbox.getByRole('textbox');
  const searchBtn = searchbox.getByRole('button', { name: /search/i });

  it('should render menu', () => {
    expect(searchbox).toBeDefined();
  });

  it('should have label, input and button', () => {
    expect(label).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(searchBtn).toBeDefined();
  });

  it('should allow user to type email in controlled input', async () => {
    await user.type(emailInput, email);
    await waitFor(() => {
      expect(searchbox.getByDisplayValue(email)).toBeDefined();
    });
  });

  it('should redirect to the /seach/{email} page after clicking Search button', async () => {
    await user.click(searchBtn);
    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: `/search/${encodeURIComponent(email)}`,
        pathname: `/search/${encodeURIComponent(email)}`,
      });
    });
  });

  it('should close the menu after redirect', () => {
    expect(closeFn).toBeCalledTimes(1);
  });
});
