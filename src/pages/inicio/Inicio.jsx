import React from 'react'
import gifInicio from '../../componentes/assets/gifInicio.gif'
import { ButtonConteinerStylos, InicioContainerStylos, InicioStylos, ReservaAquiButton } from './InicioStylos'

const Inicio = () => {


  return (
    <>
    <InicioContainerStylos>
      
        <img  src={gifInicio} />
       
    <InicioStylos>
        <h1>¡Sumérgete en el Mundo de la Música y el Teatro en Vivo!</h1>
        <h2>Descubre Experiencias Únicas con los Mejores Artistas.</h2>
        <p>Busca a tu Artista Favorito o Encuentra a los Mejores Talentos en Nuestro Escenario.
         Encuentra aquí las Entradas que Deseas y Compra con Seguridad.</p>
        <p>¿Tienes Preguntas o Sugerencias? ¡Contáctanos!</p>
    <ButtonConteinerStylos>
<ReservaAquiButton to="/paginaDeProductos"> Envía tus Preguntas</ReservaAquiButton>
<ReservaAquiButton to="/paginaDeProductos"> Reservá Ahora </ReservaAquiButton>
    </ButtonConteinerStylos>

    </InicioStylos>
        
     </InicioContainerStylos>
        
    
    </>
  )
}

export default Inicio
