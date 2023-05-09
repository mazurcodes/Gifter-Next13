import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import GiftList from '@/components/GiftList';
import { giftsData } from '@/data/giftsData';
import { Category, Occasion, Priority, Status } from '@/constants';

vi.mock('next/navigation', () => require('next-router-mock'));

const dummyName = 'The Dummy Name';
const dummyNotes = 'dummy note';
const dummyPrice = '4359845034958340';
const dummyDate = '999999999';

const dummyGift = {
  id: 9999,
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

const dummyGifts = [...giftsData, dummyGift];

describe('GiftList component', () => {
  render(<GiftList data={dummyGifts} />);

  const giftFilterToolbar = screen.getByRole('toolbar');

  it('should be rendered on screen', () => {
    expect(giftFilterToolbar).toBeDefined();
  });

  it('should have pseudo table head with column labels', () => {
    expect(screen.getByText(/status/i)).toBeDefined();
    expect(screen.getByText(/gift name/i)).toBeDefined();
    expect(screen.getByText(/priority/i)).toBeDefined();
    expect(screen.getByText(/occasion/i)).toBeDefined();
    expect(screen.getByText(/category/i)).toBeDefined();
    expect(screen.queryByText(/price/i)).toBeDefined();
    expect(screen.getByText(/date/i)).toBeDefined();
    expect(screen.getByText(/notes/i)).toBeDefined();
  });
  it('should have list with multiple gifts including special dummy gift', () => {
    expect(screen.getByText(dummyName)).toBeDefined();
    expect(screen.getByText(dummyNotes)).toBeDefined();
    expect(screen.getByText(dummyPrice)).toBeDefined();
    expect(screen.getByText(dummyDate)).toBeDefined();
  });
});
