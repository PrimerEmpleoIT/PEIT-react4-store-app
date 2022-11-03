import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    producto: [],
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.producto = [...state.producto, action.payload]
      state.quantity = state.quantity + 1
    },
  },
})
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
