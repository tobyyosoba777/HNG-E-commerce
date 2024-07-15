// import ProductCard from './ProductCard';

// const ProductList = ({ products }) => (
//   <div className="flex flex-wrap justify-around p-4">
//     {products.map(product => (
//       <ProductCard key={product.id} product={product} />
//     ))}
//   </div>
// );

// export default ProductList;


// import React from 'react';
// import ProductCard from './ProductCard';

// const ProductList = ({ products }) => (
//   <div className="flex flex-wrap justify-around p-4">
//     {products.length > 0 && products.map(product => (
//       <ProductCard key={product.id} product={product} />
//     ))}
//   </div>
// );

// export default ProductList;


// import React, { useState } from 'react';
// import ProductCard from './ProductCard';

// const ProductList = ({ products }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(12); // Initial value

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className="flex flex-wrap justify-around p-4">
//       {currentProducts.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//       <div className="flex justify-center w-full mt-4">
//         {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
//           <button
//             key={number + 1}
//             onClick={() => paginate(number + 1)}
//             className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${currentPage === number + 1 ? 'bg-blue-600' : ''}`}
//           >
//             {number + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, currentPage, totalPages, onPageChange }) => {
  const productsPerPage = 10;

  // Calculate the index range of products to display for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap justify-around p-4">
      {currentProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="flex justify-center w-full mt-4">
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none ${currentPage === page ? 'bg-blue-600' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;





