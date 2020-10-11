import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Custom components
import { NavBar, HomePage, Footer, ProductsIndex, Cart } from '../';

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:category" element={<ProductsIndex />} />
      </Routes>
      <Footer />
    </div>
  );
}