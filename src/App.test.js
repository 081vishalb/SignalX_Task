// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Header', () => () => <div>Header</div>);
jest.mock('./components/ProductList', () => () => <div>ProductList</div>);
jest.mock('./components/Modal', () => () => <div>Modal</div>);

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Add New Product')).toBeInTheDocument();
    expect(screen.getByText('Reload Products')).toBeInTheDocument();
    expect(screen.getByText('ProductList')).toBeInTheDocument();
    expect(screen.queryByText('Modal')).not.toBeInTheDocument();
  });

  // You can write more test cases to test App component behavior
});
