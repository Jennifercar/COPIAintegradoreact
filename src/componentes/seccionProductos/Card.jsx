import React from 'react';
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../../redux/modalSlice/modalSlice';
import { BotonCompraStylos, Productos } from './seccionProductoStylos';


const Card = ({ name, date, cardImg, precio,id }) => {
  const dispatch = useDispatch();

  return (
    <Productos>
      <img src={cardImg} alt={name} />
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h3>Precio: {precio}$</h3>
      <BotonCompraStylos onClick={() => dispatch(agregarAlCarrito({name, date, cardImg, precio,id }))}>
        Comprar
      </BotonCompraStylos>
    </Productos>
  );
};

export default Card;
