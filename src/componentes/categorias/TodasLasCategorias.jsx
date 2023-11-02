import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerCategorias } from './CategoriaStylos';
import Categorias from './Categorias';




const TodasLasCategorias = () => {

  const categories = useSelector(state => state.categorias.categorias)

  return (
    <ContainerCategorias>
      {
        categories.map((category) => {
          return <Categorias {...category} key={category.id}/>
        })
      }
    </ContainerCategorias>
  );
};

export default TodasLasCategorias;