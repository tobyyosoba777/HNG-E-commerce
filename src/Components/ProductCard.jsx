// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const ProductCard = ({ product }) => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div className="flex flex-wrap items-center justify-center gap-4 md:justify-center md:flex-nowrap md:gap-6 lg:flex lg:flex-wrap lg:gap-4">
//       <div className="w-full gap-4 p-4 m-10 border rounded-md shadow-md border-slate-300 bg-gradient-to-b from-zinc-700 to-zinc-300 md:w-auto lg:w-1/2">
//         <img className="object-cover h-80 w-96" src={product.image} alt={product.name} />
//         <div className="mt-2">
//           <h2 className="text-xl font-bold text-center">{product.name}</h2>
//           {/* <p className="text-gray-700">{product.description}</p> */}
//           <p className="font-semibold text-center text-">${product.price}</p>
//           <div className='flex items-center justify-center mt-5'>
//             <button
//               onClick={() => addToCart(product)}
//               className="items-center px-4 py-1 mx-auto text-center text-white bg-orange-700 rounded hover:bg-orange-800"
//             >
//               Add to Cart
//             </button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Construct the image URL
  const baseUrl = 'https://timbu-get-all-products.reavdev.workers.dev/';
  // const imageUrl = product.photos.length > 0 ? `${baseUrl}${product.photos[0].url}` : 'path/to/default-image.jpg';

  // Handle pricing display
  const priceUSD = product.current_price[0]?.USD;
  const priceNGN = product.current_price[0]?.NGN;
  const price = priceUSD || priceNGN;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-center md:flex-nowrap md:gap-6 lg:flex lg:flex-wrap lg:gap-4">
      <div className="w-full gap-4 p-4 m-10 border rounded-md shadow-md border-slate-300 bg-gradient-to-b from-zinc-700 to-zinc-300 md:w-auto lg:w-1/2">
        <img 
          className="object-cover h-80 w-96" 
          src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
          alt={product.name} 
          onError={(e) => e.target.src = 'path/to/default-image.jpg'} 
        />
        <div className="mt-2">
          <h2 className="text-xl font-bold text-center">{product.name}</h2>
          {price ? <p className="font-semibold text-center">${price}</p> : null}
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




// const link =  `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${import.meta.env.ORGANIZATION_KEY}&reverse_sort=false&page=${currentPage}&size=${size}&Appid=${import.meta.env.APP_ID}&Apikey=${import.meta.env.API_KEY}`
// https://timbu-get-all-products.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=1&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473