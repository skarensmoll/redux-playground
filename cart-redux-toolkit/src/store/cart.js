import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  displayCart: false,
  products: {},
  quantity: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    displayCart(state) {
      console.log('display cart');
      state.displayCart = !state.displayCart;
    },
    addProduct(state, action) {
      const newProduct ={
        ...action.payload.product,
        quantity: 0,
        total: 0
      };

      const id = action.payload.id;

      if(state.products[id]) {
        return;
      }
      state.products[id] = newProduct;
      state.quantity += 1;
    },
    addQuantityProd(state, action) {
      const { idProd, quantity } = action.payload;
      const prodRef = state.products[idProd];
      const newQuantity = prodRef.quantity + quantity;

      if(newQuantity < 0 ) return;

      state.products[idProd].quantity += quantity;
      prodRef.total = newQuantity * prodRef.price;
    }
  }
});

export const cartActions = cartSlice.actions;