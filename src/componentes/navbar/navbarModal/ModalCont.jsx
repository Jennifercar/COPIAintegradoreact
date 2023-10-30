import React from 'react';
import { useDispatch } from 'react-redux';
import {  agregarAlCarrito, sacarItem, vaciarCarrito } from '../../../redux/modalSlice/modalSlice';
import { ButtonStylos, 
         ContadorButtonContainerStylos, 
    ContainerCard, } from '../navbarModal/ModalStylos';

import { BiSolidTrash } from "react-icons/bi";
import { formatoPrecio } from '../../../util/formatoPrecio';
import Contador from '../../../util/contador/Contador';


const ModalCont = ({cardImg,name,precio, id, quantity})=> {

const dispatch = useDispatch()

return (
    <ContainerCard>

      <img src={cardImg} alt={name} />
      <h2>{name}</h2>
      <h2>{formatoPrecio(precio)}</h2>

      <ContadorButtonContainerStylos>
        <ButtonStylos onClick={() => dispatch(sacarItem(id))}>-</ButtonStylos>
          <Contador><h2>{quantity}</h2></Contador>
        <ButtonStylos onClick={() => dispatch(agregarAlCarrito({cardImg,precio, name, quantity,id }))}>+</ButtonStylos>
        
        <ButtonStylos onClick={() => dispatch(vaciarCarrito(id))}><BiSolidTrash/></ButtonStylos>
          
      </ContadorButtonContainerStylos>
        
       
      </ContainerCard>
);
};

export default ModalCont;