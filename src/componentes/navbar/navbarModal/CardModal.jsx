import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStylos, ProductosWrapperStylos, TotalStylos } from './ModalStylos';
import { formatoPrecio } from '../../../util/formatoPrecio';
import ModalCont from '../../navbar/navbarModal/ModalCont';
import { toggleMenu, vaciarCarrito } from '../../../redux/modalSlice/modalSlice';
import { useNavigate } from 'react-router-dom';

const CardModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productoDelCarrito } = useSelector(state => state.modal) || [];
  
  const totalPrecio = productoDelCarrito.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);

  const vaciarCarritoConfirm = () => {
    const confirmacion = window.confirm('¿Deseas vaciar tu carrito?');
    if (confirmacion) {
      dispatch(vaciarCarrito());
    }
  };

  return (
    <>
      <ProductosWrapperStylos>
        {productoDelCarrito.length ? (
          productoDelCarrito.map((item) => {
            return <ModalCont {...item} key={item.id} />;
          })
        ) : (
          <h2>Tu carrito está vacío</h2>
        )}
      </ProductosWrapperStylos>
      {productoDelCarrito.length > 0 && (
        <TotalStylos>{formatoPrecio(totalPrecio)} Entradas</TotalStylos>
      )}
      {productoDelCarrito.length > 0 && (
        <ButtonStylos onClick={vaciarCarritoConfirm}>Vaciar carrito</ButtonStylos>
      )}
      {productoDelCarrito.length > 0 && (
        <ButtonStylos
          onClick={() => {
            navigate('/checkoutTicket');
            dispatch(toggleMenu());
          }}
        >
          Iniciar compra
        </ButtonStylos>
      )}
    </>
  );
};

export default CardModal;
