import { configureStore } from '@reduxjs/toolkit';
import productSlicer from './productSlice'
import productDetailsSlicer from './productDetailsSlice'
import cartSlicer from './cartSlice'

export const store = configureStore({
  reducer: {
   products: productSlicer,
   productDetails: productDetailsSlicer,
   cart: cartSlicer
  },
});
