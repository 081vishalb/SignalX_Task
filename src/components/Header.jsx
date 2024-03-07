import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const Header = () => {
  const { products, totalPages } = useContext(ProductContext);

  return (
    <header>
      <h1>Products</h1>
      <p>Total Products: {products.length}</p>
      {/* <Link to="/add-product">Add New Product</Link> */}
    </header>
  );
};

export default Header;
