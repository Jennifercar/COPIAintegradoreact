import React from 'react';
import { Formik } from 'formik';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../componentes/UI/login/LoginInput';
import Submit from '../../componentes/UI/login/submit/Submit';
import { loginInitialValues } from '../../formik/registroFormik/registroInitialValues';
import { loginValidationSchema } from '../../formik/registroFormik/registroValidationSchema';
import { LoginContainerStylos,Form}  from './loginStylos';
import { loginUsuario } from '../../axios/axiosUsuario';
import { useDispatch} from 'react-redux';
import { setUsuarioActual } from '../../redux/usuarioSlice/UsuarioSlice';
import { LinckStylos } from '../registro/registroStylos';



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  



  return (
    
      <LoginContainerStylos>
        
          <h2>Inicio de sesion</h2>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) => {

              const usuario = await loginUsuario
               (values.email,
                values.contraseña);
                if(usuario) {
                  dispatch(
                    setUsuarioActual({
                      ...usuario.usuario,
                      token: usuario.token
                    })
                  )
                  if (usuario.usuario.verificado) {
                    navigate('/');
                  } else {
                    navigate('/informeDeVerificado');
                  }
                }
            } }
    
            
          >
            <Form>
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
              <Link to='/registro'>
                <LinckStylos>¿No tenes cuenta? Crea una</LinckStylos>
              </Link>
              <Submit>
                Ingresar
              </Submit>
            </Form>
          </Formik>
        </LoginContainerStylos>

        

  )
}

export default Login