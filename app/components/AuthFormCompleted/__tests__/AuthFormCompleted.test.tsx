import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AuthFormCompleted from '..';

const email = 'email@example.com';

describe('AuthFormCompleted', () => {
  it('should render the component with the provided email', () => {
    render(<AuthFormCompleted email={email} />);

    expect(screen.getByText(/welcome/i)).toBeDefined();
    expect(screen.getByText(email)).toBeDefined();
  });
  it('should render the component with 2 links', () => {
    expect(screen.queryAllByRole('link').length).toBe(2);
  });
});
