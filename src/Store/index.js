import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './features/Products/index'
import cartReducer from './features/Cart'
// import products from './features/Products'
// creacion del store  y en cada reducer para cada parte del estado del app
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    cart: cartReducer,
    // productos: products,
  },
})
