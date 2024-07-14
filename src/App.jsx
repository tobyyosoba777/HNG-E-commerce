import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Checkout from './Components/Checkout';
import Payments from './Components/Payment';
import { CartProvider } from './Components/CartContext';
import ProductList1 from './Components/ProductList1';
import ProductList2 from './Components/ProductList2';
import ProductList3 from './Components/ProductList3';
import Error from './Components/Error';
import { fetchData } from '../apiService'; // Import your fetch function
import ProductDetails from './Components/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Assuming you have a way to get total pages from API

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=${currentPage}&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473`;
        const response = await fetch(url);
        const data = await response.json();
        
        // Update products and total pages
        setProducts(prevProducts => [...prevProducts, ...data.items]);
        setTotalPages(data.total); // Assuming the API returns total pages
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [currentPage]); // Fetch products when currentPage changes or on initial render

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1); // Increment current page to fetch next page
  };

  return (
    <CartProvider>
      <Router>
        <div className="w-full App">
          <Navbar />
          <div className="min-h-screen p-4">
          <div className="flex justify-center mb-4">
              <Link to="/productlist1" className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-600">Page 1</Link>
              <Link to="/productlist2" className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-600">Page 2</Link>
              <Link to="/productlist3" className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-600">Page 3</Link>
            </div>
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route
                path="/products"
                element={<ProductList products={products} loadMore={loadMore} totalPages={totalPages} />}
              />
              <Route path="/products/:productId" element={<ProductDetails products={products} />} />
              <Route path="/productlist1" element={<ProductList1 products={products} />} />
              <Route path="/productlist2" element={<ProductList2 products={products} />} />
              <Route path="/productlist3" element={<ProductList3 products={products} />} />
              
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
