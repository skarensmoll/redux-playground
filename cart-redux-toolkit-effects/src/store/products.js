import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {
    "0": {
      title: 'Product 1',
      description: 'This is a product description of 1',
      price: 80
    },
    "1": {
      title: 'Product 2',
      description: 'This is a product description of 2',
      price: 50
    },
    "2": {
      title: 'Product 3',
      description: 'This is a product description of 3',
      price: 20
    },
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState
})




