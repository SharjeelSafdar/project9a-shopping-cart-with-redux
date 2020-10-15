import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
// Custom components
import { NavBar, HomePage, Footer, ProductsIndex, Cart, ProductDetails } from '../';

export const App: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path=":category" element={<><Outlet /></>}>
          <Route path="/" element={<ProductsIndex />} />
          <Route path=":shoeId" element={<ProductDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}