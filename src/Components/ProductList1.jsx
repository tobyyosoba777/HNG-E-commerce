import React from 'react';
import ProductCard from './ProductCard';

const ProductList1 = ({ products }) => {
  const first10Products = products.slice(0, 10);

  return (
    <div className="flex flex-wrap justify-around p-4">
      {first10Products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList1;
