// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Checkout from './Components/Checkout';
import Payments from './Components/Payment';
import { CartProvider } from './Components/CartContext';
import Error from './Components/Error';
import { fetchData } from '../apiService'; 
import ProductDetails from './Components/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData("/");
        console.log(data.items);
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    getProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="w-full App">
          <Navbar />
          <div className="min-h-screen p-4">
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/products" element={<ProductList products={products} />} />
              <Route path="/products/:productId" element={<ProductDetails products={products} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
