import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);
  const Element = screen.getByText(/Hello World/i);
  expect(Element).toBeInTheDocument();
});
