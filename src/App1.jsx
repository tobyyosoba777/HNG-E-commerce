import React from 'react'
import  { useState } from 'react';
import Navbar from '../src/Components/Navbar';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Products from './Components/Products';
import Home from './Components/Home';
import { NavLink, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import product1 from '../src/assets/product1.png'
import product2 from '../src/assets/product2.png'
import product3 from '../src/assets/product3.png'
import product4 from '../src/assets/product4.png'
import product5 from '../src/assets/product5.png'
import product6 from '../src/assets/product6.png'


const App1 = () => {

    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, image: product1 },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, image: product2 },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, image: product3 },
        { id: 4, name: 'Product 4', description: 'This is product 4', price: 30, image: product4 },
        { id: 5, name: 'Product 5', description: 'This is product 4', price: 30, image: product5 },
        { id: 5, name: 'Product 6', description: 'This is product 6', price: 30, image: product6 },
      ]);
    
      const [cart] = useState([]); // For simplicity, cart is an empty array here
    

  return (
    <Router>
      <div className='w-full App'>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            {/* <Route path="/create">
              <Create/>
            </Route>

            <Route path="/about">
              <About/>
            </Route> */}

            {/* <Route path="/blogs/:id">
              <BlogDetails1/>
            </Route> */}

            {/* This wildcard Route will match any route that is not explicitly defined */}
            {/* <Route path="*">
              <NotFound />
            </Route> */}
            
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App1
