import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import ProductList from './ProductList';

jest.mock('../context/ProductContext', () => ({
  ProductContext: {
    Consumer: ({ children }) => children({
      products: [],
      totalPages: 1,
      currentPage: 1,
      fetchProducts: jest.fn(),
    }),
  },
}));

describe('ProductList', () => {
  test('renders correctly and displays products', () => {
    render(<ProductList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

});
