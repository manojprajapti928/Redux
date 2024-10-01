import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from "./ProductReduser"

export const store = configureStore({
  reducer: {
    Productstore:ProductSlice
  },
})