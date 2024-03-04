import React from 'react';
import {useSelector} from "react-redux";
import FormularioCheckout from '../../componentes/checkout/FormularioCheckout';
 import ProductosCheckout from '../../componentes/checkout/ProductosCheckout';
import { CheckoutContainerStylos } from './checkoutPaginaStylos';

const CheckoutTicket = () => {

  const {productoDelCarrito} = useSelector(state => state.modal)

  const precio  = productoDelCarrito.reduce((acc, item) => {
    return (acc += item.precio * item.quantity)
  }, 0)

  return (
    <>
      <CheckoutContainerStylos>
        <FormularioCheckout
          productoDelCarrito={productoDelCarrito}
          precio ={precio}
        />
      <ProductosCheckout
          productoDelCarrito={productoDelCarrito}
          precio ={precio}
        />
       
      </CheckoutContainerStylos>
    </>
  );
};

export default CheckoutTicket;

