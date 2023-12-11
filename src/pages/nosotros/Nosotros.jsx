import {Formik} from 'formik';
import React from 'react'
import { BeneficiosStylos, ContainerTextoNosotros, NosotroStylos, NosotrosContainerStylos } from './nosotrosStylos'
import { ContactosContainerStylos, FormContainer, FormStylos,  LineaDivisoriaContactosStylos,  TextoContactoStylos,  TituloForm } from './contactoStylos';
import FormInput from './FormInput';
import BotonSubmit from './BotonSubmit';
import { initialValues } from '../../formik/initialValues';
import { validentionSchema } from '../../formik/esquemaValidacion';


const Nosotros = () => {
  return (
    <>
    <NosotrosContainerStylos> 
    <NosotroStylos>

      <ContainerTextoNosotros> <h2>Acerca de Nosotros</h2>
    <h3>En Tu Ticket, nos encanta el entretenimiento en vivo. Colaboramos con artistas y 
      teatros para eventos exclusivos. Únete a nuestra comunidad para disfrutar de teatro
       y música en vivo. ¡Gracias por ser parte de esta experiencia!"
    </h3></ContainerTextoNosotros>

    </NosotroStylos>
   <BeneficiosStylos>
    <ul>
      <li>Calidad de Atención</li>
      <li>Momentos inolvidables</li>
      <li>Experiencias Únicas</li>
      <li>Descuentos Exclusivos </li>
    </ul>
   </BeneficiosStylos>
    </NosotrosContainerStylos>
    
    <ContactosContainerStylos>
  <LineaDivisoriaContactosStylos/>
  <TextoContactoStylos>¿Tienes consultas? ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros y despeja todas tus dudas. Queremos que tu experiencia al adquirir tus tickets sea perfecta.</TextoContactoStylos>
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