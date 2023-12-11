import React from 'react'
import gifInicio from '../../componentes/assets/gifInicio.gif'
import { ContainerTextoInicioStylos, InicioContainerStylos, InicioStylos, ReservaAquiButton } from './InicioStylos'


const Inicio = () => {


  return (
    <>
    <InicioContainerStylos>
        <img  src={gifInicio} alt= "gifRecital"/> 
    <InicioStylos>
      <ContainerTextoInicioStylos>
        <h1>¡Sumérgete en el Mundo de la Música y el Teatro en Vivo!</h1>
        <p>Busca a tu Artista Favorito o Encuentra a los Mejores Talentos en Nuestro Escenario.
         Encuentra aquí las Entradas que Deseas y Compra con Seguridad.</p>
         <ReservaAquiButton to="/paginaDeProductos"> Reservá Ahora </ReservaAquiButton>
      </ContainerTextoInicioStylos>
        
    
    </InicioStylos>
    </InicioContainerStylos>
    



    
    </>
  )
}

export default Inicio
