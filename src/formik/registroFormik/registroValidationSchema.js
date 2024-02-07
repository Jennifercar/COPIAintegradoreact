import * as Yup from 'yup';
import { registroEmail } from '../../util/registroMail';

export const checkoutValidationSchema = Yup.object({
  nombre: Yup.string().required('Campo Requerido'),
  celular: Yup.string().required('Campo Requerido'),
  direccion: Yup.string().required('Campo Requerido'),
  address: Yup.string().required('Campo Requerido'),
});

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

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .matches(registroEmail, 'Mail no valido')
    .required('Campo Requerido'),
});