import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import Modal from './Modal';

jest.mock('../context/ProductContext', () => ({
  ProductContext: {
    Consumer: ({ children }) => children({
      addProduct: jest.fn(),
    }),
  },
}));

describe('Modal', () => {
  test('renders correctly and submits form', () => {
    render(<Modal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText('Add New Product')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByLabelText('Price:'), { target: { value: 10 } });
    fireEvent.change(screen.getByLabelText('Image URL:'), { target: { value: 'test.jpg' } });

    fireEvent.click(screen.getByText('Add Product'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

});
