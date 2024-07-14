import React from 'react';
import ProductCard from './ProductCard';

const ProductList3 = ({ products }) => {
  const last8Products = products.slice(20, 28); // Assuming you have 30 products in total

  return (
    <div className="flex flex-wrap justify-around p-4">
      {last8Products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList3;
