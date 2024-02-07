import React, { useState } from 'react';
import {
  ContainerLinckStylos,
  MenuStylos,
  LinckStylos,
  Navbarcontainerstylos,

} from './NavbarStylos';
import logo from '../../../src/componentes/assets/Gold Luxury Initial Circle Logo.png';
import { BsCartFill } from 'react-icons/bs';
import { BiMenu, BiSolidXCircle } from 'react-icons/bi';
import { useDispatch, useSelector} from 'react-redux';
import {toggleMenu} from '../../redux/modalSlice/modalSlice';
import { ModalContainer, ModalContent, ModalHeader } from './navbarModal/ModalStylos';
import CardModal from './navbarModal/CardModal';


const Navbar = () => {

  const [menuAbierto, setMenuAbierto]= useState(false)
  const cerrarModal = useSelector(state =>state.modal.menuOculto)
  const dispatch = useDispatch();

  
 
  const alternarMenuHam =() => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = ()=> {
    setMenuAbierto(false);
  }

  const manejarClickCarrito =() => {
    cerrarMenu();
    dispatch(toggleMenu())
  }


  return (
    <Navbarcontainerstylos>
      {menuAbierto && (
        <div className="menuHamburguesa">
        <ul>
          <li><LinckStylos to="/" onClick={cerrarMenu}>Inicio</LinckStylos></li>
          <li><LinckStylos to="/registro" onClick={cerrarMenu}>Registro</LinckStylos></li>
          <li><LinckStylos to="/nosotros" onClick={cerrarMenu}>Quienes somos?</LinckStylos></li>
          <li><LinckStylos to="/paginaDeProductos" onClick={cerrarMenu}>Tu Ticket</LinckStylos></li>
          <li><LinckStylos><BsCartFill onClick={manejarClickCarrito}/></LinckStylos></li>
        </ul>
        </div>
      )}  
      
      {cerrarModal && (<ModalContainer>
          <ModalContent>
          <ModalHeader>
          Carrito de compras
          <BiSolidXCircle onClick={() => dispatch(toggleMenu())} />
          </ModalHeader>
          <CardModal />
          </ModalContent>
        </ModalContainer>
      )}  


      <LinckStylos to="/">
        <img src={logo} alt="logo" />
      </LinckStylos>

      <ContainerLinckStylos>
        <LinckStylos to="/">Inicio</LinckStylos>
        <li><LinckStylos to="/registro" onClick={cerrarMenu}>Registro</LinckStylos></li>
        <LinckStylos to="/nosotros">Quienes somos?</LinckStylos>
        <LinckStylos to="/paginaDeProductos">Tu Ticket</LinckStylos>
        <div onClick={manejarClickCarrito}>
          <BsCartFill />
        </div>
     
   
     </ContainerLinckStylos>
    
     
        <MenuStylos> <BiMenu onClick={alternarMenuHam} /> </MenuStylos>
      
    </Navbarcontainerstylos>
  );
};

export default Navbar;
