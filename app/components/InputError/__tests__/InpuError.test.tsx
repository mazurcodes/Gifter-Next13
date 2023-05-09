import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InputError from '..';

const fieldName = 'Name';

describe('InputError component', () => {
  render(<InputError fieldName={fieldName} />);
  it('should display error message', () => {
    expect(
      screen.getByText(new RegExp(`${fieldName} is required`))
    ).toBeDefined();
  });
});
