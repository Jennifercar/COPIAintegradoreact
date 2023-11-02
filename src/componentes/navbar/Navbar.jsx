import React from 'react';
import {
  ContainerLinckStylos,
  MenuStylos,
  LinckStylos,
  Navbarcontainerstylos,

} from './NavbarStylos';
import logo from '../../../src/componentes/assets/Gold Luxury Initial Circle Logo.png';
import { BsCartFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import CardModal from './navbarModal/CardModal';
import { useDispatch, useSelector } from 'react-redux';
import {toggleOculto} from '../../redux/modalSlice/modalSlice';
import { ModalContainer, 
  ModalContent, 
  ModalHeader,
} from './navbarModal/ModalStylos'
import { BiSolidXCircle } from "react-icons/bi";

const Navbar = () => {

  const cerrarModal = useSelector(state =>state.modal.menuOculto)
  const dispatch = useDispatch();


  return (
    <Navbarcontainerstylos>
      {cerrarModal &&  <ModalContainer> 
        <ModalContent >
          <ModalHeader> 
          Carrito de compras 
          <BiSolidXCircle onClick={() => dispatch(toggleOculto())}/>
            </ModalHeader>
            <CardModal  />
            </ModalContent>
            
            </ModalContainer>}
      <LinckStylos to="/">
        <img src={logo} alt="logo" />
      </LinckStylos>
      <ContainerLinckStylos>
        <LinckStylos to="/">Inicio</LinckStylos>
        <LinckStylos to="/nosotros">Quienes somos?</LinckStylos>
        <LinckStylos to="/paginaDeProductos">Tu Ticket</LinckStylos>
        <BsCartFill onClick={() => dispatch(toggleOculto())}  />
      </ContainerLinckStylos>
      <MenuStylos onClick={() => dispatch(toggleOculto())} > <BiMenu />
      </MenuStylos>
      {cerrarModal && (
        <ul>
          <li>Inicio</li>
          <li>Quienes somos?</li>
          <li><BsCartFill onClick={() => dispatch(toggleOculto())}/></li>
        </ul>
      )}
    </Navbarcontainerstylos>
  );
};

export default Navbar;
