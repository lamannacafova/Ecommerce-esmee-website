import React from 'react';
import AppRouter from './router/AppRouter';
import { CartProvider } from 'react-use-cart';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from 'react-use-wishlist';
import { ContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <WishlistProvider>
        <CartProvider>
          <ContextProvider>
          <AppRouter />
          </ContextProvider>
        </CartProvider>
        </WishlistProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
