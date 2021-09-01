import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { authSlice } from './auth';


export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer
  }
});

export { counterActions } from './counter';
export { authActions } from './auth';

