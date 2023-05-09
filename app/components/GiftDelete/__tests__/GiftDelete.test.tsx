import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import GiftDelete from '..';
import * as crudUtils from '@/firebase/crudUtils';
import mockRouter from 'next-router-mock';

vi.mock('next/navigation', () => require('next-router-mock'));

const user = userEvent.setup();

const dummyId = 'yoyo9';

// mocking implementation so the firebase will not throw an error
// and the execution will continue to router.push redirection
const deleteGiftSpy = vi
  .spyOn(crudUtils, 'deleteGift')
  .mockImplementationOnce(async (dummyId) => dummyId);

describe('GiftDelete component', () => {
  render(<GiftDelete id={dummyId} />);
  it('should be rendered with delete button', () => {
    expect(screen.getByText(/delete your item:/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /delete/i })).toBeDefined();
  });

  it('should have confirm delete button and cancel button after user click delete', async () => {
    await user.click(screen.getByRole('button', { name: /delete/i }));
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /i'm sure. delete!/i })
      ).toBeDefined();
      expect(screen.getByRole('button', { name: /no!/i })).toBeDefined();
    });
  });

  it('should call the deleteGift function with gift uid as a parameter after user clicks the delete confirmation button', async () => {
    await user.click(
      screen.getByRole('button', { name: /i'm sure. delete!/i })
    );
    await waitFor(() => {
      expect(deleteGiftSpy).toBeCalledWith(dummyId);
    });
  });

  it('should redirect to the page /dashboard/wishlist after gift is deleted', () => {
    expect(mockRouter).toMatchObject({
      asPath: '/dashboard/wishlist',
      pathname: '/dashboard/wishlist',
    });
  });
});
