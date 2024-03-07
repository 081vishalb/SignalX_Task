import React, { useState, useContext } from 'react';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Modal from './components/Model';
import { ProductContext } from './context/ProductContext';
import { Link } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { fetchProducts } = useContext(ProductContext);

  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <Link to='add-product' >
          <button >Add New Product</button>
        </Link>
        {/* <button onClick={openModal}>Add New Product</button> */}
        <button onClick={fetchProducts}>Reload Products</button>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
