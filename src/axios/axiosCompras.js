import axios from 'axios';
import {
    fallaDeCreacionCompra,
    exitoAlObtenerCompra,
    fallAlObtenerCompras,
} from '../redux/compraSlice/compraSlice';
import { BASE_URL } from '../util/constantes';

export const getcompras = async (dispatch, usuarioActual) => {
    try {
        const compras = await axios.get(`${BASE_URL}compras`, {
            headers: {
                'x-token': usuarioActual.token,
            },
        });
        console.log("Respuesta de obtener compras:", compras.data); // Agregar log aquí
        if (compras) {
            dispatch(exitoAlObtenerCompra(compras.data.data));
        }
    } catch (error) {
        console.error("Error al obtener compras:", error); // Agregar log de error aquí
        dispatch(fallAlObtenerCompras('Error al obtener compras'));
    }
};

export const crearCompra = async (compra, dispatch, usuarioActual) => {
    try {
        const response = await axios.post(`${BASE_URL}compras`, compra, {
            headers: {
                'x-token': usuarioActual.token,
            },
        });
        console.log("Respuesta de crear compra:", response.data); // Agregar log aquí
        if (response) {
            getcompras(dispatch, usuarioActual);
        }
    } catch (error) {
        console.error("Error al crear la compra:", error); // Agregar log de error aquí
        dispatch(fallaDeCreacionCompra());
    }
};
