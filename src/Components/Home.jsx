// src/Components/Home.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { Router, Routes, Route } from 'react-router-dom';
import '../Home.css';

const Home = ({ products }) => {
  return (
    <div>
      <main className='mx-auto home'>
        <h1 className='ml-5 text-5xl tracking-wide md:text-7xl sm:text-5xl'>
          <span>Be Bold,</span>
          <span>Be Beautiful,</span>
          <span>with Bold Beauty</span>
        </h1>
        <p className='max-w-xl ml-5 text-xl text-gray-200'>
          We offer only the best products because the health of your skin is our priority
        </p>

        <div className="flex items-end gap-5 ml-5 links ">
          <button className="px-5 py-1 font-bold text-black bg-white rounded-md hover:-translate-y-1 hover:duration-75">
            {`Go to Cart`}
            {/* <Router>
            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router> */}
          </button>

          <button className="px-5 py-1 font-bold text-white bg-transparent border rounded-md hover:-translate-y-1 hover:duration-200">
            {`View Products`}
          </button>
        </div>
      </main>

      <section className="flex flex-wrap justify-center gap-4 mt-10 product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Home;
