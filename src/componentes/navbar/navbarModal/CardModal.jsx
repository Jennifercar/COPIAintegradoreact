import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  agregarAlCarrito, sacarItem, vaciarCarrito } from '../../../redux/modalSlice/modalSlice';
import { ProductosWrapperStylos,
  ButtonStylos, 
    ContadorButtonContainerStylos, 
    ContainerCard, 
    ModalFooter,
    TotalStylos,
 } from './ModalStylos';
import { productsData } from '../../../data/ticket';
import { formatoPrecio } from '../../../util/formatoPrecio';


const CardModal = () => {
 
  const {productoDelCarrito} = useSelector(state => state.modal);

 
  const dispatch = useDispatch();

  const totalPrecio = productoDelCarrito.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
      }, 0)
    

  return (
    <>
       <ProductosWrapperStylos>
    
  {productoDelCarrito.length ? (
    productoDelCarrito.map((item) => {
      
      const product = productsData.find((prod) => {
        return prod.id === item.id;
      });
      
      console.log( product);
      return (
        <div key={product.id}>
          <img src={product.cardImg} alt={product.name} />
          <h2>{product.name}</h2>
          <h2>{formatoPrecio(product.precio)}</h2>

          <ContainerCard>
          
            <ContadorButtonContainerStylos>
              <ButtonStylos onClick={() => dispatch(agregarAlCarrito(productoDelCarrito[0].id))}>+</ButtonStylos>
              <ButtonStylos onClick={() => dispatch(sacarItem(productoDelCarrito[0].id))}>-</ButtonStylos>
              <ButtonStylos onClick={vaciarCarrito}>🗑</ButtonStylos>
              <TotalStylos>{formatoPrecio(totalPrecio)} Entradas</TotalStylos>
            </ContadorButtonContainerStylos>
            <ModalFooter>
              <ButtonStylos>Realizar compra</ButtonStylos>
            </ModalFooter>
          </ContainerCard>
        </div>
      );
    })
  ) : (
    <p>no hay productos en tu carrito</p>
  )}
</ProductosWrapperStylos>
      
    </>
  );
};

export default CardModal;
