import React from 'react'

import SeccionProductos from '../../componentes/seccionProductos/SeccionProductos'
import TodasLasCategorias from '../../componentes/categorias/TodasLasCategorias'

const Inicio = () => {
  return (
    <>
    <TodasLasCategorias/>
    <h2>Eventos</h2>
    <SeccionProductos/>
    </>
  )
}

export default Inicio