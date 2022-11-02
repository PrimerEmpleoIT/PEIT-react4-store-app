import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './features/Products/index'
// import products from "./features/Products";
// creacion del store  y en cada reducer para cada parte del estado del app
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,

    // creo un estado productos que van consumir la data que le pase el reducer products
    // productos: products,
  },
})
