import { render, screen } from '@testing-library/react';
import TipoProduto from '.';

test('renders learn react link', () => {
  render(<TipoProduto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
