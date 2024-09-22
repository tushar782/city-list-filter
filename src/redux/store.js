// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice'; // Assuming you have itemSlice for your items

const store = configureStore({
  reducer: {
    items: itemReducer, // Combine your reducers here
  },
});

export default store;
