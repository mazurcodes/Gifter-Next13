import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AuthFormCompleted from '..';

describe('AuthFormCompleted', () => {
  it('should render the component with the provided email', () => {
    const email = 'email@example.com';

    render(<AuthFormCompleted email={email} />);

    expect(screen.getByText(/you are signed in as:/i)).toBeDefined();
    expect(screen.getByText(email)).toBeDefined();
  });
});
