import {Formik} from 'formik';
import React from 'react'
import { BeneficiosStylos, ContainerTextoNosotros, NosotroStylos, NosotrosContainerStylos } from './nosotrosStylos'
import { ContactosContainerStylos, FormContainer, FormStylos, MapaStylos, TituloForm } from './contactoStylos';
import FormInput from './FormInput';
import BotonSubmit from './BotonSubmit';
import Mapa from './MapaGoogle';
import { initialValues } from '../../formik/initialValues';
import { validentionSchema } from '../../formik/esquemaValidacion';

const Nosotros = () => {
  return (
    <>
    <NosotrosContainerStylos> 
    <NosotroStylos>

      <ContainerTextoNosotros> <h2>Acerca de Nosotros</h2>
    <h3>En Tu Ticket, nos apasiona el entretenimiento en vivo.
       Nuestra misión es hacer que disfrutes de experiencias culturales emocionantes y memorables. 
       Trabajamos estrechamente con artistas y teatros para ofrecerte una selección única de eventos. 
       Únete a nosotros para vivir la emoción del teatro y la música en vivo. Gracias por ser parte de nuestra comunidad.
    </h3></ContainerTextoNosotros>

    </NosotroStylos>
   <BeneficiosStylos>
    <ul>
      <li>Calidad de Atención</li>
      <li>Momentos inolvidables</li>
      <li>Experiencias Únicas</li>
      <li>Exclusivos Descuentos VIP</li>
    </ul>
   </BeneficiosStylos>
    </NosotrosContainerStylos>
    
    <ContactosContainerStylos>
  <MapaStylos> 
     <h2>Información de contacto</h2>
      <Mapa/>
  </MapaStylos> 
  
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

     

   </ContactosContainerStylos>
    </>
  )
}

export default Nosotros