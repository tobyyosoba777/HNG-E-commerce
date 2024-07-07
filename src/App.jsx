import  { useState } from 'react';
import Navbar from '../src/Components/Navbar';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Products from './Components/Products';
import Home from './Components/Home';


const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30 },
  ]);

  const [cart] = useState([]); // For simplicity, cart is an empty array here

  return (
    <div className="w-lvw App">
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
