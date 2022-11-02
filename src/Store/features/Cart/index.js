import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    id: '',
    title: '',
    description: '',
    price: '',
    images: '',
    stock: '',
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state = [...state, action.payload]
    },
  },
})

export default cartSlice.reducer
