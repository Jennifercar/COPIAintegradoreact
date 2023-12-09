import React from 'react'
import SeccionProductos from '../../componentes/seccionProductos/SeccionProductos'
import TodasLasCategorias from '../../componentes/categorias/TodasLasCategorias'
import { LineaDivisoriaStylos, TextoEventosStylos } from './PaginaDeProductoStylos'


const PaginaDeProductos = () => {
  return (
    <>
    <TextoEventosStylos>Tus eventos aquí</TextoEventosStylos>
    <LineaDivisoriaStylos/>
    <TodasLasCategorias/>
    <SeccionProductos/>
    </>
  )
}

export default PaginaDeProductos