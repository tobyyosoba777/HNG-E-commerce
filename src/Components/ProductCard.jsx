import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-center md:flex-nowrap md:gap-6 lg:flex lg:flex-wrap lg:gap-4">
      <div className="w-full gap-4 p-4 m-10 border rounded-md shadow-md border-slate-300 bg-gradient-to-b from-zinc-700 to-zinc-300 md:w-auto lg:w-1/2">
        <img className="object-cover h-80 w-96" src={product.image} alt={product.name} />
        <div className="mt-2">
          <h2 className="text-xl font-bold text-center">{product.name}</h2>
          {/* <p className="text-gray-700">{product.description}</p> */}
          <p className="font-semibold text-center text-">${product.price}</p>
          <div className='flex items-center justify-center mt-5'>
            <button
              onClick={() => addToCart(product)}
              className="items-center px-4 py-1 mx-auto text-center text-white bg-orange-700 rounded hover:bg-orange-800"
            >
              Add to Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
