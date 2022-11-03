import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    producto: [],
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let isNewProduct = false
      state.producto.map((p, index) => {
        if (p.id === action.payload.id) {
          state.producto[index].quantity++
          isNewProduct = true
        }
      })

      state.producto = !isNewProduct
        ? [...state.producto, action.payload]
        : [...state.producto]
      state.quantity++
    },
  },
})
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer

// id,
// stock,
// img,
// icon,
// description,
// oldPrice,
// price,
// quantity,
