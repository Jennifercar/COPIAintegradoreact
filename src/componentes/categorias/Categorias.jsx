import React from 'react'
import { BotonContainerStylos, ContainerCategorias } from './CategoriaStylos'
import { useDispatch} from 'react-redux'
import { selecionarCategoria } from '../../redux/categoriaSlice/categoriaSlice';


export const Categorias = ({name,category}) => {

  const dispatch = useDispatch();

 

  return (
    
    <>
    <ContainerCategorias >
      
       <BotonContainerStylos onClick={() => dispatch(selecionarCategoria(category)) } >
       <h2>{name}</h2> 
       </BotonContainerStylos> 
       
    </ContainerCategorias>
    </>
   
  )
}

export default Categorias;