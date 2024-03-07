import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders correctly and displays total products count', () => {
    render(<Header />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Total Products: 0')).toBeInTheDocument();
  });

});
