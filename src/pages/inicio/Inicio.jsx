import React from 'react'
import gifInicio from '../../componentes/assets/gifInicio.gif'

import { ButtonConteinerStylos, InicioContainerStylos, InicioStylos, ReservaAquiButton } from './InicioStylos'
import { ContactoStylos, ContactosContainerStylos, FormContainer, ParrafoContactos, SubtituloForm, TituloForm } from './contactoStylos'

const Inicio = () => {


  return (
    <>
    <InicioContainerStylos>
      
        <img  src={gifInicio} alt= "gifRecital"/>
       
    <InicioStylos>
        <h1>¡Sumérgete en el Mundo de la Música y el Teatro en Vivo!</h1>
        <h2>Descubre Experiencias Únicas con los Mejores Artistas.</h2>
        <p>Busca a tu Artista Favorito o Encuentra a los Mejores Talentos en Nuestro Escenario.
         Encuentra aquí las Entradas que Deseas y Compra con Seguridad.</p>
        
    <ButtonConteinerStylos>
<ReservaAquiButton to="/paginaDeProductos"> Envía tus Preguntas</ReservaAquiButton>
<ReservaAquiButton to="/paginaDeProductos"> Reservá Ahora </ReservaAquiButton>

    </ButtonConteinerStylos>

    </InicioStylos>
        
     </InicioContainerStylos>
    
    <ContactosContainerStylos>

    <FormContainer>
   <TituloForm>Contactenos</TituloForm>
   <SubtituloForm>Este es un formulario de ejemplo</SubtituloForm>
 </FormContainer>

    <ContactoStylos> 
      <ParrafoContactos>"Le invitamos a utilizar nuestro formulario de contacto para aclarar sus dudas, 
        asegurarse de no perderse ningún evento y adquirir las mejores entradas. 
        Estamos aquí para hacer que sus noches sean especiales."</ParrafoContactos>
      </ContactoStylos>
   

    </ContactosContainerStylos>
    
    </>
  )
}

export default Inicio
