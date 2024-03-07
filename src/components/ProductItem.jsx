import React from 'react';
import '../App.css';
import styles from './styles.module.scss'


const ProductItem = ({ product }) => {
  return (
    <>
      <div className={styles.productItem} style={{ }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: '11rem', maxHeight: '15rem' }}
          placeholder={<div style={{ width: '100%', height: '150px', backgroundColor: '#ccc' }}>Loading...</div>}
          effect="fadein"
          loading='lazy'
        />
        <div>
          <h4>{product.name}</h4>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
