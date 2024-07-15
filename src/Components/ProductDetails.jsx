import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }

  const priceUSD = product.current_price?.[0]?.USD;
  const priceNGN = product.current_price?.[0]?.NGN;
  const price = priceUSD || priceNGN || 'Price not available';

  const imageUrl = product.photos?.[0]?.url
    ? `https://api.timbu.cloud/images/${product.photos[0].url}`
    : 'https://via.placeholder.com/300'; // Placeholder image URL

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-80 rounded-lg"
            src={imageUrl}
            alt={product.name || 'Product image'}
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold mb-2">${price}</p>
            <p className="text-gray-600">{product.description || 'No description available.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
