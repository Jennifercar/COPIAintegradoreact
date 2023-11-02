import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { ButtonStylos, ProductosWrapperStylos,TotalStylos} from './ModalStylos';
import { formatoPrecio } from '../../../util/formatoPrecio';
import ModalCont from '../../navbar/navbarModal/ModalCont';
import { vaciarCarrito } from '../../../redux/modalSlice/modalSlice';

const CardModal = () => {

  const dispatch = useDispatch();
 
  const {productoDelCarrito}= useSelector(state => state.modal);

 

  const totalPrecio = productoDelCarrito.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
      }, 0)
    
      
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

  <ButtonStylos onClick={() => dispatch(vaciarCarrito())}>vaciar carrito</ButtonStylos>

  )}

{productoDelCarrito.length > 0 && (
<ButtonStylos>comprar</ButtonStylos>
)}

    </>
  );
};

export default CardModal;
