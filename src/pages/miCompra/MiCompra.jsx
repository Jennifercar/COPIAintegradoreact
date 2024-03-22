import React, { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux"
import { getcompras } from '../../axios/axiosCompras';
import { fallAlObtenerCompras, limpiarError } from '../../redux/compraSlice/compraSlice';
import CardsMiCompra from '../../componentes/miCompra/CardsMiCompra';

const Compras = () => {
  
  const dispatch = useDispatch();

  const containerStylos = {
    color:'white',
    height:'630px',
    display:'flex',
    flexDirection: "column",
    alignItems: "center",
    
  };

  

  const tituloStylos = {
    fontSize: '30px',
    '@media (max-width: 390px)': { 
      fontSize: '60px', 
    } 
  };

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
      <div style={containerStylos}>
        <h2 style={tituloStylos}>Mi Compra</h2>
       <CardsMiCompra/>
        
      </div>
    </>
  );
};


export default Compras;
