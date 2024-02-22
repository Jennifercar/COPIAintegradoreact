import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { ButtonStylos, ProductosWrapperStylos,TotalStylos} from './ModalStylos';
import { formatoPrecio } from '../../../util/formatoPrecio';
import ModalCont from '../../navbar/navbarModal/ModalCont';
import { toggleMenu, vaciarCarrito } from '../../../redux/modalSlice/modalSlice';
import { useNavigate } from 'react-router-dom';

const CardModal = () => {

  const dispatch = useDispatch();
  const navigate= useNavigate()
 
  const {productoDelCarrito}= useSelector(state => state.modal) || [];

  //const [compraExitosa, setCompraExitosa] = useState(false);
 

  const totalPrecio = productoDelCarrito.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
      }, 0)
    
  //const manejarCompra = () => {
   //     setCompraExitosa(true);
   //     dispatch(vaciarCarrito());
   //   };   

  const [eliminado, setEliminado] = useState(false);
  const vaciarCarritoConfirm =(itemId) => {
    const confirmacion = window.confirm ('¿Deceas vaciar tu carrito?');
    if(confirmacion) {
      dispatch(vaciarCarrito(itemId));
      setEliminado(true);
      
    }
  }
  return (
    <>
    
       <ProductosWrapperStylos>
       {
       productoDelCarrito.length ? (  productoDelCarrito.map((item) => {
        return <ModalCont {...item} key={item.id} />
        }) ) : ( <h2>Tu carrito está vacío</h2> )
        }

</ProductosWrapperStylos>
{productoDelCarrito.length > 0 && (
<TotalStylos>{formatoPrecio(totalPrecio)} Entradas</TotalStylos>
)}


{productoDelCarrito.length > 0 && (

  <ButtonStylos onClick={() => vaciarCarritoConfirm(null)}>vaciar carrito</ButtonStylos>

  )}

{productoDelCarrito.length > 0 && (
<ButtonStylos onClick={() => {
                  navigate('/registro');
                  dispatch(toggleMenu())
                  }}>iniciar compra</ButtonStylos>
)}

    </>
  );
};

export default CardModal;
