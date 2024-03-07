import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
  test('renders correctly with product details', () => {
    const product = { id: 1, name: 'Test Product', price: 10, image: 'test.jpg' };
    render(<ProductItem product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

});
