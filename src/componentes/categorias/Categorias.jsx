import React from 'react'
import { BotonContainerStylos, ContainerCategorias } from './CategoriaStylos'
import { useDispatch, useSelector } from 'react-redux'
import { selecionarCategoria } from '../../redux/categoriaSlice/categoriaSlice';


export const Categorias = ({name,category}) => {

  const dispatch = useDispatch();

  const categoriaSelecionada = useSelector ((state) => state.categorias.categoriaSelecionada)

  return (
    
    
    <ContainerCategorias 
    seleccionar={category===categoriaSelecionada}
    >
        <>
       <BotonContainerStylos onClick={() => dispatch(selecionarCategoria(category)) } >
       <h2>{name}</h2> 
       </BotonContainerStylos> 
       
       </>

    </ContainerCategorias>
    
   
  )
}

export default Categorias;