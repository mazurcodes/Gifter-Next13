import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Category, Occasion, Priority, Status } from '@/constants';
import GiftEdit from '@/components/GiftEdit';
import { connectAuthEmulator } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import * as crudUtils from '@/firebase/crudUtils';
import userEvent from '@testing-library/user-event';

connectAuthEmulator(auth, 'http://localhost:9099');

const spySubmitFn = vi.spyOn(crudUtils, 'updateGift');
const user = userEvent.setup();

const dummyName = 'The Dummy Name';
const dummyNotes = 'dummy note';
const dummyPrice = '1934';
const dummyDate = '01.01.2023';
const dummyEmail = 'some@example.com';
const dummyId = 'abc';

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

const dummyGiftUpdate = {
  name: dummyName,
  status: Status.AVAILABLE,
  priority: Priority.MEDIUM,
  occasion: Occasion.NONE,
  category: Category.FOOD,
  notes: dummyNotes,
  price: dummyPrice,
  linkOne: 'http://exampleOne.com',
  linkTwo: 'http://exampleTwo.com',
  linkThree: 'http://exampleThree.com',
};

describe('GiftEdit component', () => {
  render(<GiftEdit data={dummyGift} id={dummyId} />);
  const form = within(screen.getByRole('form'));
  const nameInput = form.getByRole('textbox', { name: /gift name:/i });
  const priceInput = form.getByRole('textbox', { name: /price:/i });
  const link1Input = form.getByRole('textbox', { name: /link 1:/i });
  const link2Input = form.getByRole('textbox', { name: /link 2:/i });
  const link3Input = form.getByRole('textbox', { name: /link 3:/i });
  const notesInput = form.getByRole('textbox', { name: /notes:/i });
  const statusSelect = form.getByRole('combobox', { name: /status:/i });
  const prioritySelect = form.getByRole('combobox', { name: /priority:/i });
  const occasionSelect = form.getByRole('combobox', { name: /occasion:/i });
  const categorySelect = form.getByRole('combobox', { name: /category:/i });
  const submitButton = form.getByRole('button', { name: /save/i });

  it('should render GiftEdit component form with inputs', () => {
    expect(form).toBeDefined();
    expect(nameInput).toBeDefined();
    expect(priceInput).toBeDefined();
    expect(link1Input).toBeDefined();
    expect(link2Input).toBeDefined();
    expect(link3Input).toBeDefined();
    expect(notesInput).toBeDefined();
    expect(statusSelect).toBeDefined();
    expect(prioritySelect).toBeDefined();
    expect(occasionSelect).toBeDefined();
    expect(categorySelect).toBeDefined();
  });

  it('form should have default values from dummy data', () => {
    expect(form.getByText(new RegExp(dummyGift.ownerEmail))).toBeDefined();
    expect(form.getByText(dummyGift.date)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.name)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.status)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.priority)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.category)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.occasion)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.linkOne)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.linkTwo)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.linkThree)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.price)).toBeDefined();
    expect(form.getByDisplayValue(dummyGift.notes)).toBeDefined();
  });

  it('should submit the data to the firestore with the updateGift function', async () => {
    await user.click(submitButton);
    expect(spySubmitFn).toBeCalledWith(dummyId, dummyGiftUpdate);
  });
});
