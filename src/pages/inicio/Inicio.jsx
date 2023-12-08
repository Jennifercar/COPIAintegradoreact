import {Formik} from 'formik';
import React from 'react'
import gifInicio from '../../componentes/assets/gifInicio.gif'
import { InicioContainerStylos, InicioStylos, ReservaAquiButton } from './InicioStylos'
import {  
  ContactosContainerStylos, 
  FormContainer, 
  FormStylos, 
  MapaStylos, 
  TituloForm } from './contactoStylos'
import FormInput from '../inicio/FormInput';
import BotonSubmit from '../inicio/BotonSubmit';
import { initialValues } from '../../formik/initialValues';
import { validentionSchema } from '../../formik/esquemaValidacion';
import Mapa from './MapaGoogle';



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
        
    <ReservaAquiButton to="/paginaDeProductos"> Reservá Ahora </ReservaAquiButton>
    </InicioStylos>
    </InicioContainerStylos>
    


<ContactosContainerStylos>
  
 <FormContainer>
 
   <TituloForm>Contactenos</TituloForm>

   <Formik
   initialValues={initialValues}
   validationSchema={validentionSchema}
   onSubmit={(values,resetForm) => {
    console.log(values);
    resetForm();
  }
   }
    
   >
     <FormStylos>
       <FormInput
         name="name"
         label="Nombre"
         type="text"
       />
       <FormInput
         name="email"
         label="Email"
         type="text"
       />
       <FormInput
         name="mensaje"
         label="Mensaje"
         type="text"
       />
       <BotonSubmit>Enviar</BotonSubmit>
     </FormStylos>


     </Formik>
     </FormContainer>

     <MapaStylos> 
     <h2>Información de contacto</h2>
      <Mapa/>
      </MapaStylos>

   </ContactosContainerStylos>
    
    </>
  )
}

export default Inicio
