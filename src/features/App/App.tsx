import React from 'react';
// Custom components
import { NavBar, HomePage, Footer } from '../';

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}