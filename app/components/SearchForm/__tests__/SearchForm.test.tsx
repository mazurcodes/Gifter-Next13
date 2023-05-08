import { expect, describe, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '..';
import mockRouter from 'next-router-mock';

const text = 'email@example.com';

vi.mock('next/navigation', () => require('next-router-mock'));

describe('SearchForm component', () => {
  render(<SearchForm />);
  const form = within(screen.getByRole('form'));
  const input = form.getByRole('textbox');
  const searchBtn = form.getByRole('button', { name: 'Search' });
  const user = userEvent.setup();

  it('should render form', () => {
    expect(form).toBeDefined();
  });

  it('should have a heading with "Gifter" text', () => {
    expect(
      form.getByRole('heading', { level: 1, name: 'Gifter' })
    ).toBeDefined();
  });

  it('should have image', () => {
    expect(form.getByRole('img')).toBeDefined();
  });

  it('should have search button', () => {
    expect(searchBtn).toBeDefined();
  });

  it('should show error when nothing is typed in the input element', async () => {
    await user.keyboard('{enter}');
    await waitFor(() => {
      expect(input).toBe(document.querySelector('input:invalid'));
    });
  });

  it('should change the input value when user types', async () => {
    await user.type(input, text);
    await waitFor(() => {
      expect(form.getByDisplayValue(text)).toBeDefined();
    });
  });

  it('should submit the form after user click enter and redirect to search page with query', async () => {
    await user.keyboard('{enter}');
    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: `/search?email=${encodeURIComponent(text)}`,
        pathname: '/search',
        query: { email: text },
      });
    });
  });

  it('should submit the form after user click search button and redirect to search page with query', async () => {
    await mockRouter.push('/');
    await user.click(searchBtn);
    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: `/search?email=${encodeURIComponent(text)}`,
        pathname: '/search',
        query: { email: text },
      });
    });
  });
});
