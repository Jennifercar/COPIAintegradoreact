import * as Yup from 'yup';

 export const checkoutValidationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    celular: Yup.string().required('El número de celular es requerido'),
    localizacion: Yup.string().required('La localización es requerida'),
    domicilio: Yup.string().required('El domicilio es requerido')
  });
  