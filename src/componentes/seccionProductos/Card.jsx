import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../../redux/modalSlice/modalSlice';
import { BotonCompraStylos, MensajeConfirmacion, Productos } from './seccionProductoStylos';


const Card = ({ name, date, cardImg, precio,id }) => {
  const dispatch = useDispatch();

  const [ticketConfirmado , setTicketConfirmado] = useState(false);

  const confirmacionProducto = () => {
    dispatch(agregarAlCarrito({name, date, cardImg, precio,id}));
    setTicketConfirmado(true);

    setTimeout(() =>{
      setTicketConfirmado(false);
    }, 1500);
  };

  return (
    <>
    <Productos>
      
      <img src={cardImg} alt={name} />
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h3>Precio: {precio}$</h3>
      <BotonCompraStylos onClick={confirmacionProducto}>
        Comprar
      </BotonCompraStylos>
      <MensajeConfirmacion mensaje={ticketConfirmado}>¡has agregado un producto a tu carrito!</MensajeConfirmacion>
    </Productos>
    
    </>
  );
};

export default Card;
