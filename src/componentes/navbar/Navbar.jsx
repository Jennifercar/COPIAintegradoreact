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
import {toggleMenu} from '../../redux/modalSlice/modalSlice';
import { ModalContainer, 
  ModalContent, 
  ModalHeader,
} from './navbarModal/ModalStylos'
import { BiSolidXCircle } from "react-icons/bi";
import { abrirMenu } from '../../redux/menuHamburSlice/menuHamburSlice';

const Navbar = () => {

  const cerrarModal = useSelector(state =>state.modal.menuOculto)
  const menuHam = useSelector(state =>state.menu.menuHamburguesa)
  const dispatch = useDispatch();


  return (
    <Navbarcontainerstylos>
      {cerrarModal &&  <ModalContainer> 
        <ModalContent >
          <ModalHeader> 
          Carrito de compras 
          <BiSolidXCircle onClick={() => dispatch(toggleMenu())}/>
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
        <BsCartFill onClick={() => dispatch(toggleMenu())}  />
        {menuHam && (
          <MenuStylos onClick={() => dispatch(abrirMenu())}> <BiMenu /> </MenuStylos>
        )}
      </ContainerLinckStylos>
      <MenuStylos onClick={() => dispatch(abrirMenu())} > <BiMenu />
      </MenuStylos>
      {menuHam && (
        <ul>
          <li><LinckStylos to="/">Inicio</LinckStylos></li>
          <li><LinckStylos to="/nosotros">Quienes somos?</LinckStylos></li>
          <li><LinckStylos to="/paginaDeProductos">Tu Ticket</LinckStylos></li>
          <li><BsCartFill onClick={() => dispatch(toggleMenu())}/></li>
        </ul>
      )}
    </Navbarcontainerstylos>
  );
};

export default Navbar;
