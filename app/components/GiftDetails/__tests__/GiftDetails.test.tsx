import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Category, Occasion, Priority, Status } from '@/constants';
import GiftDetails from '@/components/GiftDetails';

const dummyName = 'The Dummy Name';
const dummyNotes = 'dummy note';
const dummyPrice = '1934';
const dummyDate = '01.01.2023';
const dummyEmail = 'some@example.com';

const dummyGift = {
  id: 6,
  ownerEmail: dummyEmail,
  status: Status.AVAILABLE,
  name: dummyName,
  priority: Priority.MEDIUM,
  occasion: Occasion.NONE,
  category: Category.FOOD,
  notes: dummyNotes,
  price: dummyPrice,
  date: dummyDate,
  linkOne: 'http://exampleOne.com',
  linkTwo: 'http://exampleTwo.com',
  linkThree: 'http://exampleThree.com',
};

describe('Gift component', () => {
  render(<GiftDetails data={dummyGift} />);
  it('should render GiftDetails component with dummy data', () => {
    expect(screen.getByText(/some@example.com/i)).toBeDefined();
    expect(screen.getByText(Status.AVAILABLE)).toBeDefined();
    expect(screen.getByText(dummyName)).toBeDefined();
    expect(screen.getByText(Priority.MEDIUM)).toBeDefined();
    expect(screen.getByText(Occasion.NONE)).toBeDefined();
    expect(screen.getByText(Category.FOOD)).toBeDefined();
    expect(screen.getByText(dummyNotes)).toBeDefined();
    expect(screen.getByText(dummyPrice)).toBeDefined();
    expect(screen.getByText(dummyDate)).toBeDefined();
    expect(
      screen.getByRole('link', { name: 'http://exampleThree.com' })
    ).toBeDefined();
  });
});
