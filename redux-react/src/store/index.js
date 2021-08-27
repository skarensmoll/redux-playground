import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement(state) {
    console.log('decrementing')
      state.counter--; // immer will handle impure functions
    },
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions =  counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer
 }) ;
