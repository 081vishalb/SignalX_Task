// Modal.js
import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';


const Modal = ({ isOpen, onClose }) => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price, image });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <label htmlFor="image">Image URL:</label>
          <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
          <button type="submit">Add Product</button>
        </form>
        {/* <Link to='/' >
          <button>Close</button>
        </Link> */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
