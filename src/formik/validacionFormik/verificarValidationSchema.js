import * as Yup from "yup"

export const verificarSchema = Yup.object({

    code: Yup.string().required('Campo requerido'), 
    
  
  });