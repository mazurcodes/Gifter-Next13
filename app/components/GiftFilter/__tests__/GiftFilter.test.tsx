import { expect, describe, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import GiftFilter from '@/components/GiftFilter';
import { DispatchWithoutAction } from 'react';
import { giftsData } from '@/data/giftsData';
import { Status } from '@/constants';
import userEvent from '@testing-library/user-event';
import { filterGiftsByStatus } from '@/utils/server';

let mockSetState: DispatchWithoutAction;

const user = userEvent.setup();
const availableGifts = filterGiftsByStatus(giftsData, Status.AVAILABLE);
const reservedGifts = filterGiftsByStatus(giftsData, Status.RESERVED);
const boughtGifts = filterGiftsByStatus(giftsData, Status.BOUGHT);

describe('GiftFilter component', () => {
  mockSetState = vi.fn();
  render(<GiftFilter statusFn={mockSetState} data={giftsData} />);
  const filter = within(screen.getByRole('toolbar'));
  const allBtn = filter.getByRole('button', { name: /all/i });
  const availableBtn = filter.getByRole('button', { name: Status.AVAILABLE });
  const reservedBtn = filter.getByRole('button', { name: Status.RESERVED });
  const boughtBtn = filter.getByRole('button', { name: Status.BOUGHT });

  it('should render filter', () => {
    expect(filter).toBeDefined();
  });

  it('should have 4 buttons within the filter', () => {
    expect(allBtn).toBeDefined();
    expect(availableBtn).toBeDefined();
    expect(reservedBtn).toBeDefined();
    expect(boughtBtn).toBeDefined();
  });

  it('should send filtered data after user click on button', async () => {
    //all data
    await user.click(allBtn);
    await waitFor(() => {
      expect(mockSetState).toBeCalledWith(giftsData);
    });
    vi.restoreAllMocks();

    // available gifts
    await user.click(availableBtn);
    await waitFor(() => {
      expect(mockSetState).toBeCalledWith(availableGifts);
    });
    vi.restoreAllMocks();

    // reserved gifts
    await user.click(reservedBtn);
    await waitFor(() => {
      expect(mockSetState).toBeCalledWith(reservedGifts);
    });
    vi.restoreAllMocks();

    // bought gifts
    await user.click(boughtBtn);
    await waitFor(() => {
      expect(mockSetState).toBeCalledWith(boughtGifts);
    });
    vi.restoreAllMocks();
  });
});
