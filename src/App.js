import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
