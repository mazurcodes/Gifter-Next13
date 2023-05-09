import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Gift from '@/components/Gift';
import { Category, Occasion, Priority, Status } from '@/constants';
import mockRouter from 'next-router-mock';

vi.mock('next/navigation', () => require('next-router-mock'));

const user = userEvent.setup();

const dummyName = 'The Dummy Name';
const dummyNotes = 'dummy note';
const dummyPrice = '1934';
const dummyDate = '01.01.2023';

const dummyGift = {
  uid: 'yoyo6',
  ownerEmail: 'some@example.com',
  status: Status.AVAILABLE,
  name: dummyName,
  priority: Priority.MEDIUM,
  occasion: Occasion.NONE,
  category: Category.FOOD,
  notes: dummyNotes,
  price: dummyPrice,
  date: dummyDate,
  links: [],
};

describe('Gift component', () => {
  render(<Gift data={dummyGift} />);
  it('should render Gift component with dummy data', () => {
    expect(screen.getByText(Status.AVAILABLE)).toBeDefined();
    expect(screen.getByText(dummyName)).toBeDefined();
    expect(screen.getByText(Priority.MEDIUM)).toBeDefined();
    expect(screen.getByText(Occasion.NONE)).toBeDefined();
    expect(screen.getByText(Category.FOOD)).toBeDefined();
    expect(screen.getByText(dummyNotes)).toBeDefined();
    expect(screen.getByText(dummyPrice)).toBeDefined();
    expect(screen.getByText(dummyDate)).toBeDefined();
  });

  it('should redirect to the page with gift pathname and id query after user click anywhere', async () => {
    await user.click(screen.getByText(dummyName));
    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: `/gift?id=${encodeURIComponent(dummyGift.uid)}`,
        pathname: '/gift',
        query: { id: dummyGift.uid },
      });
    });
  });
});
