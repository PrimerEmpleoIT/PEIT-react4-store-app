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
      const inCart = state.producto.find(p => p.id === action.payload)
      console.log(inCart.quantity)

      if (inCart.quantity === 1) {
        state.producto = state.producto.filter(p => p.id !== action.payload)
        state.quantity--
      } else {
        state.producto.map((p, index) => state.producto[index].quantity--)
        state.quantity--
      }
      // let isDelete = false

      // state.producto.map((p, index) => {
      //   if (p.id === action.payload) {
      //     console.log('hola')
      //     state.producto[index].quantity--
      //     isDelete = true
      //   }
      // })
      // state.producto = !isDelete
      //   ? state.producto.filter(p => p.id !== action.payload)
      //   : [...state.producto]
      // state.quantity--
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
