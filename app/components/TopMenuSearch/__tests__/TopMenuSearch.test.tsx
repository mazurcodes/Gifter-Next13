import { expect, describe, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import TopMenuSearch from '@/components/TopMenuSearch';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
const text = "hello world"

describe('SearchForm component', () => {
  render(<TopMenuSearch />);
  const searchbox = within(screen.getByRole('searchbox'));
  const label = searchbox.getByLabelText(/user wishlist/i)
  const input = searchbox.getByRole('textbox');
  const button = searchbox.getByRole('button', {name: /search/i})

  it('should render menu', () => {
    expect(searchbox).toBeDefined();
  });

  it('should have label, input and button within the menu', () => {
    expect(label).toBeDefined();
    expect(input).toBeDefined();
    expect(button).toBeDefined();
  });

  it('shout allow user to type something in controlled input', async () => {
    await user.type(input, text);
    await waitFor(() => {
      expect(searchbox.getByDisplayValue(text)).toBeDefined();
    })
  });
});
