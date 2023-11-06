import { createSlice } from '@reduxjs/toolkit';
import {
  añadirProductoAlCarro,
  SacarTodosLosProductos,
  sacarProductoDelCart,
}  from './modalUtils';

const INITIAL_STATE = {
  menuOculto: true,
  productoDelCarrito: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {

    agregarAlCarrito: (state, action) => {
      return {
...state,
productoDelCarrito: añadirProductoAlCarro(state.productoDelCarrito, action.payload)
};

    },
    sacarItem: (state, action) => {
      return {
        ...state,
        productoDelCarrito: sacarProductoDelCart(state.productoDelCarrito, action.payload),
      }; 
      

    },

    borrarLosProductos: (state,action) => {
      return{ 
        ...state,
        productoDelCarrito: SacarTodosLosProductos(state.productoDelCarrito, action.payload),
    };
  },

    vaciarCarrito: (state) => {
      return {
        ...state,
        productoDelCarrito:[]
      };
      
    },

    toggleMenu: (state) => {
      return {
        ...state,
        menuOculto: !state.menuOculto

      }
     
    }
  },
});

export const { agregarAlCarrito, sacarItem,borrarLosProductos, vaciarCarrito, toggleMenu } = modalSlice.actions;

export default modalSlice.reducer;
