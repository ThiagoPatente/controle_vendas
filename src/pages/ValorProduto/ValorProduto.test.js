import { render, screen } from '@testing-library/react';
import ValorProduto from '.';

test('renders learn react link', () => {
  render(<ValorProduto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
