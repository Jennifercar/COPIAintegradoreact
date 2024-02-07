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
  },
});

export const { setUsuarioActual, toggleMenuHidden } = usuarioSlice.actions;

export default usuarioSlice.reducer;
