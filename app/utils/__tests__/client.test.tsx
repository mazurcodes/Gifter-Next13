import { describe, expect, it, vi } from 'vitest';
import { useTriggerOnBlur } from '@/utils/client';
import { render, waitFor } from '@testing-library/react';
import { useRef } from 'react';
import userEvent from '@testing-library/user-event';

describe('Test suite for client utils', () => {
  const mockFn = vi.fn();
  const user = userEvent.setup();

  it('should call trigger function 1 time in useTriggerOnBlur hook', async () => {
    const DummyDiv = () => {
      const ref = useRef<HTMLDivElement>(null);
      useTriggerOnBlur(ref, mockFn);
      return <div ref={ref}>Hello</div>;
    };
    render(<DummyDiv />);

    await user.click(document.body);
    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1);
    });
  });
});
