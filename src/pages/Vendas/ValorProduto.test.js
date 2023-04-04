import { render, screen } from '@testing-library/react';
import Vendas from '.';

test('renders learn react link', () => {
  render(<Vendas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
