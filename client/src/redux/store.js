import { configureStore } from '@reduxjs/toolkit';
import productSlicer from './productSlice'

export const store = configureStore({
  reducer: {
   products: productSlicer
   
  },
});
