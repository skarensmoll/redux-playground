import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart';
import { productsSlice } from './products';
import { globalSlice } from './global';

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    global: globalSlice.reducer,
  }
});
