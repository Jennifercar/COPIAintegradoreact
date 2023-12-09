import React from 'react'
import { InputContainerStylos, InputLabelStylos, InputStylos,ErrorSpanStylos } from './contactoStylos'
import { ErrorMessage, Field} from 'formik'


const FormInput = ({name,label,type,isError}) => {

  const estilosPersonalizados = name === "mensaje" ? { padding: "3vw 7vw" } : {};
  return (
    <InputContainerStylos>
    <InputLabelStylos htmlFor={label}>{label}</InputLabelStylos>
    <Field
        name={name}
        type={type}
        error={isError}
        id={label}
        as={InputStylos}
        style={estilosPersonalizados}
    />
    <ErrorMessage name={name} component={ErrorSpanStylos} />
</InputContainerStylos>
)
}


export default FormInput