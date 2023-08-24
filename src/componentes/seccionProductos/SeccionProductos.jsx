import React from 'react'
import { ContainerProductosStylos, SeccionContainerStylos } from './seccionProductoStylos'
import{productsData} from '../../data/ticket'
import  Productos  from './Card'

const SeccionProductos = () => {
  return (
    <>
    <SeccionContainerStylos>
        <ContainerProductosStylos>
            {
              productsData.map((product) =>{
                    return <Productos
                      {...product}
                      key= {product.id}
                    />;
                  } )
            }
        </ContainerProductosStylos>
    </SeccionContainerStylos>

    </>
  )
}
export default SeccionProductos
