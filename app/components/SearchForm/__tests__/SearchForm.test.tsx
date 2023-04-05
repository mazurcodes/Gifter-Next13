import { expect, describe, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '..';

const text = 'hello world';

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
    await user.type(form.getByLabelText(/search/i), text);
    await waitFor(() => {
      expect(form.getByDisplayValue(text)).toBeDefined();
    });

  });

  it('should submit the form after user click enter', async () => {
    await user.keyboard('{enter}');
    await waitFor(() => {
      expect(form.queryByDisplayValue(text)).toBeNull();
    });
  })
});
