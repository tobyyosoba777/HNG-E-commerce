import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const priceUSD = product.current_price[0]?.USD;
  const priceNGN = product.current_price[0]?.NGN;
  const price = priceUSD || priceNGN;

  return (
    <div className="p-4">
      <img
        className="object-cover w-full h-80"
        src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
        alt={product.name}
      />
      <h2 className="mt-2 text-2xl font-bold">{product.name}</h2>
      {price && <p className="mt-1 text-lg font-semibold">${price}</p>}
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
