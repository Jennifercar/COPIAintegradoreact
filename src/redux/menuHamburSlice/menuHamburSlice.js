import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  menuHamburguesa: true,
};

const userSlice = createSlice({
  name: 'menu',
  initialState: INITIAL_STATE,
  reducers: {
    
    abrirMenu: (state) => {
      return {
        ...state,
        menuHamburguesa: !state.menuHamburguesa,
      };
    },
  },
});

export const { abrirMenu } = userSlice.actions;

export default userSlice.reducer;