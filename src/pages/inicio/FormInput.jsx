import React from 'react'
import { InputContainerStylos, InputLabelStylos, InputStylos,ErrorSpanStylos } from './contactoStylos'
import { ErrorMessage, Field} from 'formik'


const FormInput = ({name,label,type,isError}) => {
  return (
    <InputContainerStylos>
    <InputLabelStylos htmlFor={label}>{label}</InputLabelStylos>
    <Field
        name={name}
        type={type}
        error={isError}
        id={label}
        as={InputStylos}
    />
    <ErrorMessage name={name} component={ErrorSpanStylos} />
</InputContainerStylos>
)
}


export default FormInput