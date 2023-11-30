import React from 'react'
import { ContainerProductosStylos, SeccionContainerStylos } from './seccionProductoStylos';
import  Productos  from './Card';
import { useSelector } from 'react-redux';




const SeccionProductos = () => {
  

let productos = useSelector(state => state.productos.products)

const categoriaSelecionada = useSelector(state => state.categorias.categoriaSelecionada)


  

if (categoriaSelecionada) {
  productos={
    [categoriaSelecionada]: productos[categoriaSelecionada]
  };
}

  return (
    <>
    <SeccionContainerStylos>
        <ContainerProductosStylos>
            {
              Object.entries(productos).map(([,tikets]) =>{
                return tikets.map((tiket) => {
                return  <Productos {...tiket} key= {tiket.id}/>
                  
                });
              })
            }     
               
            
        </ContainerProductosStylos>
    </SeccionContainerStylos>

    </>
  )
}
export default SeccionProductos