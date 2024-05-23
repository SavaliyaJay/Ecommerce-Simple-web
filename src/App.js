// import CategoryPage from "./pages/CategoryPage";
import Home from './pages/Home';
import React from 'react';
// import Cart from "./pages/Cart";

import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';
import Jay from './components/Jay';

function App() {
  return (
    <>
      <Home />
      <CategoryPage/>
      <ProductPage />
      <Cart />
      <Jay/>
    </>
  );
}

export default App;
