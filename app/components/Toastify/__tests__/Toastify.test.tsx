import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Toastify from '..';

describe('Toastify component', () => {
  render(<Toastify />);
  it('should render ToasContainer on screen', () => {
    expect(document.querySelector('.Toastify')).toBeDefined();
  });
});
