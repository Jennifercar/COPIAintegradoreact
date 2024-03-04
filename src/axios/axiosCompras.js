import axios from 'axios';
import {
    fallaDeCreacionCompra,
    exitoAlObtenerCompra,
    fallAlObtenerCompras,} from '../redux/compraSlice/compraSlice';
import { BASE_URL } from '../util/constantes';

export const getcompras = async (dispatch, usuarioActual) => {
 

  try {
    const compras = await axios.get(`${BASE_URL}compras`, {
      headers: {
        'x-token': usuarioActual.token,
      },
    });
    console.log(compras);
    if (compras) {
      dispatch(exitoAlObtenerCompra(compras.data.data));
    }
  } catch (error) {
    console.log(error);

    dispatch(fallAlObtenerCompras('Para hacer tu compra es necesario que tengas tu usurio')
    );
  }
};

export const crearCompra = async (compra, dispatch, usuarioActual) => {
  try {
    const response = await axios.post(`${BASE_URL}compras`, compra, {
      headers: {
        'x-token': usuarioActual.token,
      },
    });
    if (response) {
        getcompras(dispatch, usuarioActual);
    }
  } catch (error) {
    console.log("Error al crear la compra:", error);
    dispatch(fallaDeCreacionCompra());
  }
};

