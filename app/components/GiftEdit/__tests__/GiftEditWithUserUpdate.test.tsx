import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Category, Occasion, Priority, Status } from '@/constants';
import GiftEdit from '@/components/GiftEdit';
import * as crudUtils from '@/firebase/crudUtils';
import userEvent from '@testing-library/user-event';

vi.mock('next/navigation', () => require('next-router-mock'));
vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState() {
    return [{ email: dummyEmail }, false, undefined];
  },
}));

const user = userEvent.setup();

const dummyName = 'The Dummy Name';
const dummyNotes = 'dummy note';
const dummyPrice = '1934';
const dummyDate = '23.04.2023';
const dummyEmail = 'some@example.com';
const dummyUid = 'yoyo9';

const createGiftSpy = vi
  .spyOn(crudUtils, 'createGift')
  .mockImplementationOnce(async () => dummyUid);

const dummyGift = {
  uid: dummyUid,
  ownerEmail: dummyEmail,
  status: Status.AVAILABLE,
  name: dummyName,
  priority: Priority.MEDIUM,
  occasion: Occasion.NONE,
  category: Category.FOOD,
  notes: dummyNotes,
  price: dummyPrice,
  date: '23.04.2023',
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

describe('GiftEdit component when user is logged in', () => {
  describe('GiftEdit component updating existing gift', () => {
    render(<GiftEdit data={dummyGift} id={dummyUid} />);
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
      expect(
        form.getByText(/It's your item, edit what you want:/i)
      ).toBeDefined();
      expect(form.getByText(dummyDate)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.status)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.status)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.priority)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.category)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.occasion)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.linkOne)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.linkTwo)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.linkThree)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.price)).toBeDefined();
      expect(form.getByDisplayValue(dummyGift.notes)).toBeDefined();
      cleanup();
    });

    it('should submit the data to the firestore with the updateGift function', async () => {
      render(<GiftEdit data={dummyGift} id={dummyUid} />);
      await user.click(submitButton);
      waitFor(() => {
        expect(createGiftSpy).toBeCalledWith(dummyGiftUpdate);
        cleanup();
      });
    });
  });
});
