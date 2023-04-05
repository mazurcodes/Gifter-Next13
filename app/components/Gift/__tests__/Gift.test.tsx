import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Gift from '@/components/Gift';
import { Category, Occasion, Priority, Status } from '@/constants';

const dummyName = 'The Dummy Name';
const dummyNotes = 'This is a dummy note';
const dummyPrice = '1934';
const dummyDate = '01.01.2023';

const dummyData = {
  id: 6,
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
  render(<Gift data={dummyData} />);
  it('should render Gift component with dummy data', () => {
    expect(screen.getByText(Status.AVAILABLE)).toBeDefined();
    expect(screen.getByText(dummyName)).toBeDefined();
    expect(screen.getByText(Priority.MEDIUM)).toBeDefined();
    expect(screen.getByText(Occasion.NONE)).toBeDefined();
    expect(screen.getByText(Category.FOOD)).toBeDefined();
    expect(screen.getByText(dummyName)).toBeDefined();
    expect(screen.getByText(dummyPrice)).toBeDefined();
    expect(screen.getByText(dummyDate)).toBeDefined();
  });
});
