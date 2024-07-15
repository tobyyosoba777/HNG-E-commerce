import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const priceUSD = product.current_price[0]?.USD;
  const priceNGN = product.current_price[0]?.NGN;
  const price = priceUSD || priceNGN;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-center md:flex-nowrap md:gap-6 lg:flex lg:flex-wrap lg:gap-4">
      <div className="w-full gap-4 p-4 m-10 border rounded-md shadow-md border-slate-300 bg-gradient-to-b from-zinc-700 to-zinc-300 md:w-auto lg:w-1/2">
        <Link to={`/products/${product.id}`}>
          <img
            className="object-cover h-80 w-96"
            src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
            alt={product.name}
            onError={(e) => (e.target.src = 'path/to/default-image.jpg')}
          />
        </Link>
        <div className="mt-2">
          <h2 className="text-xl font-bold text-center">{product.name}</h2>
          {price ? <p className="font-semibold text-center">${price}</p> : null}
          <div className='flex text-sm items-center justify-center mt-5'>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-1 mr-2 text-white bg-orange-700 rounded hover:bg-orange-800"
            >
              Add to Cart
            </button>
            <Link
              to={`/products/${product.id}`}
              className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
