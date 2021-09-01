import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart';
import { productsSlice } from './products';

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  }
});
