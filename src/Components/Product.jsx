import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
    <p>Product page</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
