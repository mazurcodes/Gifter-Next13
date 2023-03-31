import { expect, describe, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '..';

describe('SearchForm component', () => {
  render(<SearchForm />);
  const form = within(screen.getByRole('form'));
  const input = within(form.getByLabelText(/search/i));
  const user = userEvent.setup();


  it('should render form', () => {
    expect(form).toBeDefined();
  });

  it('should have a heading with "Gifter" text', () => {
    expect(
      form.getByRole('heading', { level: 1, name: 'Gifter' })
    ).toBeDefined();
  });

  it('should have a label with "Search" text', () => {
    expect(input).toBeDefined();
  });

  it('should have image', () => {
    expect(form.getByRole('img')).toBeDefined();
  });

  it('should change the input value', async () => {
    const text = 'hello mthrfkr';

    await user.type(form.getByLabelText(/search/i), text);
    await waitFor(() => {
      expect(form.getByDisplayValue(text)).toBeDefined();
    });
  });
});
