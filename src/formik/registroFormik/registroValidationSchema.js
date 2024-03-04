import * as Yup from 'yup';
import { registroEmail } from '../../util/registroMail';


export const registerValidationSchema = Yup.object({
  nombre: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(registroEmail, 'Mail no valido')
    .required('Campo Requerido'),
  contraseña: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(registroEmail, 'Mail no valido')
    .required('Campo Requerido'),
    contraseña: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

