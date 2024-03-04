import React from 'react';
import { formatoPrecio } from '../../util/formatoPrecio';
import CardCheckout from './CardCheckout';


const ProductosCheckout = ({productoDelCarrito, precio}) => {
  return (
    <div>
      <h1>Tu pedido</h1>
      <div>

      {
        productoDelCarrito.length ? (
            productoDelCarrito.map((item) => {
            return <CardCheckout {...item} key={item.id} />
          })
        )
        : (
          <p>No tenes compras todavia, obtene tu ticket</p>
        )
      }
        
      </div>
      <div>
        <div>
          <p>Total</p>
          <span>{formatoPrecio(precio)}</span>
        </div>
    
       
        
      </div>
    </div>
  );
};

export default ProductosCheckout;
