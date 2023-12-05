import React from 'react'
import { ContainerProductosStylos, SeccionContainerStylos } from './seccionProductoStylos';
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

  return (
    <>
    <SeccionContainerStylos>
        <ContainerProductosStylos>
         
        {todosLosproductos.map(tiket => (
            <Productos {...tiket} key={tiket.id} />
          ))} 
            
        </ContainerProductosStylos>
    </SeccionContainerStylos>

    </>
  )
}
export default SeccionProductos