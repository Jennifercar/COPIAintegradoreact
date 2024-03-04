import { useDispatch } from 'react-redux';
import { formatoPrecio } from '../../util/formatoPrecio';
import { ButtonStylos, 
         ContadorButtonContainerStylos, 
         ContainerCard, 
         TextosContainerStylos } from '../navbar/navbarModal/ModalStylos';
import Contador from '../../util/contador/Contador';

import { agregarAlCarrito, sacarItem } from '../../redux/modalSlice/modalSlice';

const CardCheckout = ({cardImg, name, precio, id, quantity}) => {

  const dispatch = useDispatch();

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
      
      
        
   </ContadorButtonContainerStylos>

   
      
     
    </ContainerCard>
  );
};

export default CardCheckout;

