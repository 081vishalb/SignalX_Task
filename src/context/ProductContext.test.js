// ProductContext.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { ProductProvider } from './ProductContext';

describe('ProductContext', () => {
  test('renders without crashing', () => {
    render(
      <ProductProvider>
        <div>Test</div>
      </ProductProvider>
    );
  });

  // You can write more test cases to test context functionalities if needed
});
