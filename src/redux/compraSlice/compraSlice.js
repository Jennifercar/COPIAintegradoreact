import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  compras: null,
  error: null,
};

const compraSlice = createSlice({
  name: 'compras',
  initialState: INITIAL_STATE,
  reducers: {
    fallaDeCreacionCompra: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    exitoAlObtenerCompra: (state, action) => {
      return {
        ...state,
        error: null,
        compras: [...action.payload],
      };
    },
    fallAlObtenerCompras: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
   
    limpiarError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    limpiarCompras: (state) => {
      return {
        ...state,
        compras: null,
      };
    },
  },
});

export const {fallaDeCreacionCompra,exitoAlObtenerCompra,fallAlObtenerCompras,
    limpiarError,limpiarCompras,} = compraSlice.actions;

export default compraSlice.reducer;
