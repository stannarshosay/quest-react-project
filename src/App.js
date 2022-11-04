import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

export const ProductsContext = React.createContext([]);

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <ProductsContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </ProductsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
