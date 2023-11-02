import { createSlice } from '@reduxjs/toolkit';
import { categoriaData } from '../../data/categorias';

const INITIAL_STATE ={
    categorias: categoriaData,
    categoriaSelecionada: null,
};

export const categoriaSlice = createSlice({
 name: 'categorias',
 initialState :INITIAL_STATE ,
 reducers:{
    usarCategoria: (state) => {
        return state;
    },

    selecionarCategoria: (state , action) => {
        return {
            ...state,
            categoriaSelecionada: 
            action.payload !== state.categoriaSelecionada ? action.payload : null,

        };
    },

},

});


export const {usarCategoria,selecionarCategoria } = categoriaSlice.actions;

export default categoriaSlice.reducer;