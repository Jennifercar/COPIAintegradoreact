import React, { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux"
import { getcompras } from '../../axios/axiosCompras';
import { fallAlObtenerCompras, limpiarError } from '../../redux/compraSlice/compraSlice';
import CardsMiCompra from '../../componentes/miCompra/CardsMiCompra';

const Compras = () => {
  
  const dispatch = useDispatch();

  const usuarioActual = useSelector(state => state.usuario.usuarioActual)
  const {compras, error} = useSelector(state => state.compras);

  useEffect(() => {
    console.log("Usuario actual:", usuarioActual);
    console.log("Compras:", compras);
    console.log("Error:", error);

    if(!compras) {
        console.log("Obteniendo compras...");
        getcompras(dispatch, usuarioActual)
    }

    if (!usuarioActual?.token) {
      dispatch(fallAlObtenerCompras())
    } else {
      error && dispatch(limpiarError())
    }
  }, [usuarioActual, compras, error, dispatch])

  return (
    <>
      <div>
        <h2>Mi Compra</h2>
       <CardsMiCompra/>
        
      </div>
    </>
  );
};


export default Compras;
