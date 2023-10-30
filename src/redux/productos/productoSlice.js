import { createSlice } from "@reduxjs/toolkit";
import { EntradasAgrupadas } from "../../data/ticket";
import { TotalProductos} from "../../data/ticket";
const INITIAL_STATE = {
    products: EntradasAgrupadas,
    TotalProductos:TotalProductos,
}

export const productoSlice = createSlice({
    name: "productos",
    initialState:INITIAL_STATE,
    reducers:{
        usarProducto: state => {
            return state;
        },
    },
});

export const { usarProducto} = productoSlice.actions;

export default productoSlice.reducer