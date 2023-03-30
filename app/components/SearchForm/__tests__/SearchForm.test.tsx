import { expect, describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SearchForm from '..';

describe('NavBar component', () => {
  render(<SearchForm />);
  const form = within(screen.getByRole('form'));
  const input = within(form.getByLabelText(/search/i));

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
});
