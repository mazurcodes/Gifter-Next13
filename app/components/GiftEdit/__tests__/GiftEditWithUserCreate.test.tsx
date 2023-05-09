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
const dummyPrice = '1934';
const dummyEmail = 'some@example.com';
const dummyUid = 'yoyo9';

const createGiftSpy = vi
  .spyOn(crudUtils, 'createGift')
  .mockImplementationOnce(async () => dummyUid);

const createGiftValues = {
  name: dummyName,
  status: Status.AVAILABLE,
  priority: Priority.HIGH,
  occasion: Occasion.NONE,
  category: Category.NONE,
  price: dummyPrice,
};

describe('GiftEdit component when user is logged in', () => {
  describe('GiftEdit component updating existing gift', () => {
    render(<GiftEdit newGift />);
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
    const submitButton = form.getByRole('button', { name: /create/i });

    it('should render GiftEdit component form with inputs', () => {
      expect(form).toBeDefined();
      expect(nameInput).toBeDefined();
      expect(statusSelect).toBeDefined();
      expect(prioritySelect).toBeDefined();
      expect(categorySelect).toBeDefined();
      expect(occasionSelect).toBeDefined();
      expect(priceInput).toBeDefined();
      expect(link1Input).toBeDefined();
      expect(link2Input).toBeDefined();
      expect(link3Input).toBeDefined();
      expect(notesInput).toBeDefined();
    });

    it('form should have new Gift default values', () => {
      expect(form.getByText(/new item for/i)).toBeDefined();
      expect(nameInput.innerHTML).toBe('');
      expect(form.getByDisplayValue(createGiftValues.status)).toBeDefined();
      expect(form.getByDisplayValue(createGiftValues.priority)).toBeDefined();
      expect(form.queryAllByDisplayValue('None')).toHaveLength(2);
      expect(priceInput.innerHTML).toBe('');
      expect(link1Input.innerHTML).toBe('');
      expect(link2Input.innerHTML).toBe('');
      expect(link3Input.innerHTML).toBe('');
      expect(notesInput.innerHTML).toBe('');
    });

    it('should submit the data to the firestore with the updateGift function', async () => {
      await user.type(nameInput, createGiftValues.name);
      await user.type(priceInput, createGiftValues.price);
      await user.click(submitButton);
      waitFor(() => {
        expect(createGiftSpy).toBeCalledWith(createGiftValues);
        cleanup();
      });
    });
  });
});
