import React, { useState } from 'react'
import {BotonVerMas, ContainerProductosStylos, SeccionContainerStylos } from './seccionProductoStylos';
import  Productos  from './Card';
import { useSelector } from 'react-redux';




const SeccionProductos = () => {
  

let productos = useSelector(state => state.productos.products)

const categoriaSelecionada = useSelector(state => state.categorias.categoriaSelecionada)

let todosLosproductos = Object.values(productos).flat();
  

if (categoriaSelecionada) {
  todosLosproductos= 
   productos[categoriaSelecionada];
  
}

const [mostrarMas, setmostrarMas] = useState(6);
const produtosPorPagina =6 ;

const mostrarMasProductos =()=> {
  setmostrarMas(prev => prev + produtosPorPagina);
};
  return (
    <>
    <SeccionContainerStylos>
        <ContainerProductosStylos>
         
        {todosLosproductos.slice(0, mostrarMas).map(tiket => (
            <Productos {...tiket} key={tiket.id} />
          ))} 
            
        </ContainerProductosStylos> 
        {mostrarMas < todosLosproductos.length && (

          <BotonVerMas onClick={mostrarMasProductos}>Ver mas</BotonVerMas>)}
        

        
    </SeccionContainerStylos>

    </>
  )
}
export default SeccionProductos