
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
const ProductItem = lazy(() => import('./ProductItem'));

const ProductList = () => {
  const { products, totalPages } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const productsPerPage = 5;
  const pageStart = (currentPage - 1) * productsPerPage;
  const pageEnd = Math.min(currentPage * productsPerPage, products.length);
  const paginatedProducts = products.slice(pageStart, pageEnd);
  return (
    <div>
      <div className='product-list' style={{ paddingtop: '1rem', display: 'flex', width: '100%' }}>
        {paginatedProducts.map((product) => (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductItem key={product.id} product={product} />
          </Suspense>
        ))}
      </div>

      <div>
        {totalPages > 1 && (
          <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
