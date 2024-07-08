// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Checkout from './Components/Checkout';
import { CartProvider } from './Components/CartContext';
import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product5 from './assets/product5.png';
import product6 from './assets/product6.png';

const App = () => {
  const products = [
    { id: 1, name: 'Bold Beauty Special Lipstick', description: 'This is product 1', price: 10, image: product1 },
    { id: 2, name: 'Bold Beauty Foundation', description: 'This is product 2', price: 20, image: product2 },
    { id: 3, name: 'Bold Beauty Brush Set', description: 'This is product 3', price: 30, image: product3 },
    { id: 4, name: 'Bold Beauty Rejuvenating Scrub', description: 'This is product 4', price: 30, image: product4 },
    { id: 5, name: 'Bold Beauty Serum', description: 'This is product 4', price: 30, image: product5 },
    { id: 6, name: 'Bold Beauty Cocoa Lotion', description: 'This is product 6', price: 30, image: product6 },
  ];

  return (
    <CartProvider>
      <Router>
        <div className="w-full App">
          <Navbar />
          <div className="min-h-screen p-4">
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/products" element={<ProductList products={products} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
