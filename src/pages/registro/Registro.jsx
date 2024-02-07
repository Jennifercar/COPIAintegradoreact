import React from 'react'
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../../componentes/UI/login/LoginInput';
import Submit from '../../componentes/UI/login/submit/Submit';
import { registerInitialValues } from '../../formik/registroFormik/registroInitialValues';
import { registerValidationSchema } from '../../formik/registroFormik/registroValidationSchema';
import { LinckStylos, RegistroContainerStylos}  from '../registro/registroStylos';
import { FormStylos } from '../nosotros/contactoStylos';
import { createUsuario } from '../../axios/axiosUsuario';



const Registro = () => {

  const navigate = useNavigate()

  return (
    
      <RegistroContainerStylos>
        
          <h1>¡Crea tu cuenta!</h1>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={async (values, actions) => {
      
           const usuario = await createUsuario
               (values.nombre, 
                values.email,
                values.contraseña);

                
           actions.resetForm();

           if (usuario) {
            navigate("/login")
          }
        }}
          >  
            <FormStylos>
            <LoginInput
              name="nombre" 
              type='text' 
              label="Nombre"
              />
              <LoginInput
              name="email" 
              type='text' 
              label="Email"
              />
              <LoginInput 
              name="contraseña" 
              type='password' 
              label='Contraseña' 
              />
              
              <Link to='/login'>
                <LinckStylos>¿Ya tenes tu cuenta? Inicia sesión</LinckStylos>
              </Link>
              <Submit type='button'>
                Ingresar
              </Submit>
            </FormStylos>
          </Formik>
        </RegistroContainerStylos>



  )
}

export default Registro