import { render, screen } from '@testing-library/react';
import  { Produto } from '.';

test('renders learn react link', () => {
  render(<Produto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
