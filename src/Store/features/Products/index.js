import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products", // nombre del estado que se va crear
  initialState: {
    // el estado con el cual se va inicializar
    loading: true,
    data: [],
    error: null,
  },

  //Reducers que van a manejar el estado por el momento no asincronico  y las actions
  reducers: {
    getProducts: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    },
  },
});

//exporto las acciones para que se puedan utilizar en cualquier parte
export const { getProducts } = products.actions;

//export el reducer para el store
export default products.reducer;
