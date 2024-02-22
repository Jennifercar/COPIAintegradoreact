import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  usuarioActual: null,
  hiddenMenu: true,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: INITIAL_STATE,
  reducers: {
    setUsuarioActual: (state, action) => {
      return {
        ...state,
        usuarioActual: action.payload,
      };
    },
    toggleMenuHidden: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },

    setVerificado: (state) => {
      if (state.usuarioActual) {
        return {
          ...state,
          usuarioActual: {
            ...state.usuarioActual,
            verificado: true
          }
        };
      }
      return state;
    }

  },
})

export const { setUsuarioActual, toggleMenuHidden, setVerificado } = usuarioSlice.actions;

export default usuarioSlice.reducer;
