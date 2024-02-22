import * as Yup from "yup"

export const verificarSchema = Yup.object({

    email: Yup.string().email("Correo no válido").required("Campo requerido"),
    code: Yup.string().required('Campo requerido'), 
    
  
  });