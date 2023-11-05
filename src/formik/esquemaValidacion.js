import * as Yup from "yup"

export const validentionSchema =Yup.object ({
   name:Yup.string().trim().max(10,"Te pasaste de letras")
           .required("Nombre es obligatorio"),
   email:Yup.string()
            .email("Debes ingresar un mail valido")
            .required('Correo electronico es obligatorio'),
   mensaje: Yup.string()
            .min(5, 'El mensaje debe tener al menos 5 caracteres')
            .required('Mensaje es requerido'),
   
})
