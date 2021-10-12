import { configureStore } from '@reduxjs/toolkit';
import productSlicer from './productSlice'
import productDetailsSlicer from './productDetailsSlice'

export const store = configureStore({
  reducer: {
   products: productSlicer,
   productDetails: productDetailsSlicer
   
  },
});
