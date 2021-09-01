import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = action.payload.notification;
    }
  }
});

export { globalSlice };
export const globalActions = globalSlice.actions;