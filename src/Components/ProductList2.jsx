import React from 'react';
import ProductCard from './ProductCard';

const ProductList2 = ({ products }) => {
  const next20Products = products.slice(10, 20); // Assuming you have 30 products in total

  return (
    <div className="flex flex-wrap justify-around p-4">
      {next20Products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList2;
