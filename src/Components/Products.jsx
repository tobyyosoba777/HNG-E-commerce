import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
import Product from './Product';
import { data } from 'autoprefixer';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=1&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473')
      .then(response => response.json())
      .then(data => setProducts(data.items)) // Access the 'items' array directly
      .catch(error => console.error('Error fetching products:', error));
      console.log(data)
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
