import  { useState } from 'react';
import Navbar from '../src/Components/Navbar';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Products from './Components/Products';
import Home from './Components/Home';
import { NavLink, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import product1 from '../src/assets/product1.png'
import product2 from '../src/assets/product2.png'
import product3 from '../src/assets/product3.png'
import product4 from '../src/assets/product4.png'
import product5 from '../src/assets/product5.png'
import product6 from '../src/assets/product6.png'


const App = () => {
  const [products] = useState([
    { id: 1, name: 'Bold Beauty Special Lipstick', description: 'This is product 1', price: 10, image: product1 },
    { id: 2, name: 'Bold Beauty Foundation', description: 'This is product 2', price: 20, image: product2 },
    { id: 3, name: 'Bold Beauty Brush Set', description: 'This is product 3', price: 30, image: product3 },
    { id: 4, name: 'Bold Beauty Rejuvenating Scrub', description: 'This is product 4', price: 30, image: product4 },
    { id: 5, name: 'Bold Beauty Serum', description: 'This is product 4', price: 30, image: product5 },
    { id: 5, name: 'Bold Beauty Cocoa Lotion', description: 'This is product 6', price: 30, image: product6 },
  ]);

  const [cart] = useState([]); // For simplicity, cart is an empty array here

  return (
    <div className="w-full App">
      <Navbar />
      <div className="min-h-screen p-4">
        <Home/>
        <ProductList products={products} />
        <Checkout cart={cart} />
        </div>
      <Footer />
    </div>
  );
};


export default App;
