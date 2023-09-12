import React from 'react';
import {useSelector } from 'react-redux';
import { ProductosWrapperStylos,TotalStylos} from './ModalStylos';
import { formatoPrecio } from '../../../util/formatoPrecio';
import ModalCont from '../../navbar/navbarModal/ModalCont';

const CardModal = () => {
 
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
<TotalStylos>{formatoPrecio(totalPrecio)} Entradas</TotalStylos>
    </>
  );
};

export default CardModal;
