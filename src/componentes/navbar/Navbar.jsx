import React, { useState } from 'react';
import {
  ContainerLinckStylos,
  MenuStylos,
  LinckStylos,
  Navbarcontainerstylos,
  MenuHamburguesa,

} from './NavbarStylos';
import logo from '../../../src/componentes/assets/Gold Luxury Initial Circle Logo.png';
import { BsCartFill } from 'react-icons/bs';
import { BiMenu, BiSolidXCircle } from 'react-icons/bi';
import { useDispatch, useSelector} from 'react-redux';
import {toggleMenu} from '../../redux/modalSlice/modalSlice';
import { ModalContainer, ModalContent, ModalHeader } from './navbarModal/ModalStylos';
import CardModal from './navbarModal/CardModal';
import { useNavigate } from 'react-router-dom';
import { toggleMenuHidden } from '../../redux/usuarioSlice/UsuarioSlice';
import UsuarioModal from './usuarioModal/UsuarioModal';


const Navbar = () => {

  const [menuAbierto, setMenuAbierto]= useState(false)
  const cerrarModal = useSelector(state =>state.modal.menuOculto)
  const usuarioActual =  useSelector((state)=> state.usuario.usuarioActual);
  const dispatch = useDispatch();
const navigate = useNavigate()
  
 
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
      <MenuHamburguesa>
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
      </MenuHamburguesa>
      
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

<UsuarioModal />

      <LinckStylos to="/">
        <img src={logo} alt="logo" />
      </LinckStylos>

      <ContainerLinckStylos>
      <li>  
        <LinckStylos to="/">Inicio</LinckStylos>
        <LinckStylos to="/nosotros">Quienes somos?</LinckStylos>
        <LinckStylos to="/paginaDeProductos">Tu Ticket</LinckStylos>

        <span onClick={() => 
          usuarioActual
          ? dispatch(toggleMenuHidden())
          : navigate("/login")
        }>
      <span> 
        {
                usuarioActual ? `${usuarioActual.nombre}` : 'Login'
              } </span>
              </span>
        <div onClick={manejarClickCarrito}>
          <BsCartFill />
        </div>
      </li>
   
     </ContainerLinckStylos>
    
     
        <MenuStylos> <BiMenu onClick={alternarMenuHam} /> </MenuStylos>
      
    </Navbarcontainerstylos>
  );
};

export default Navbar;
