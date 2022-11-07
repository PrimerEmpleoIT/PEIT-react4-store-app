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
    deleteCart: (state, action) => {
      let isDelete = false
      console.log(action.payload)
      state.producto.map((p, index) => {
        if (p.id === action.payload) {
          console.log('hola')
          state.producto[index].quantity--
          isDelete = true
        }
      })
      state.producto = !isDelete
        ? state.producto.filter(p => p.id !== action.payload)
        : [...state.producto]
      state.quantity--
    },
  },
})
export const { addToCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer

// id,
// stock,
// img,
// icon,
// description,
// oldPrice,
// price,
// quantity,
