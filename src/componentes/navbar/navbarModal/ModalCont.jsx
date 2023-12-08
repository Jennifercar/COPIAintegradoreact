import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  agregarAlCarrito, sacarItem ,borrarLosProductos } from '../../../redux/modalSlice/modalSlice';
import { ButtonStylos, 
         ContadorButtonContainerStylos, 
    ContainerCard,
    TextosContainerStylos, } from '../navbarModal/ModalStylos';

import { BiSolidTrash } from "react-icons/bi";
import { formatoPrecio } from '../../../util/formatoPrecio';
import Contador from '../../../util/contador/Contador';


const ModalCont = ({cardImg,name,precio, id, quantity})=> {

const dispatch = useDispatch()
const [elimado, setEliminado] = useState(false); 

 const confirmarEliminacion =(itemId) => {
  const confirmacion = window.confirm ('¿Deceas eliminar este ticket?');
  if(confirmacion) {
    dispatch(borrarLosProductos(itemId));
    setEliminado(true);
    
  }
}


return (
    <ContainerCard>
  
      <img src={cardImg} alt={name} />
      <TextosContainerStylos>
      <h2>{name}</h2>
      <h2>{formatoPrecio(precio)}</h2>
      </TextosContainerStylos>
      <ContadorButtonContainerStylos>
        <ButtonStylos onClick={() => dispatch(sacarItem(id))}>-</ButtonStylos>
          <Contador><h2>{quantity}</h2></Contador>
        <ButtonStylos onClick={() => dispatch(agregarAlCarrito({cardImg,precio, name, quantity,id }))}>+</ButtonStylos>
        
        <ButtonStylos onClick={() => confirmarEliminacion(id)}><BiSolidTrash/></ButtonStylos>
          
     </ContadorButtonContainerStylos>

     
        
       
      </ContainerCard>
);
};

export default ModalCont;