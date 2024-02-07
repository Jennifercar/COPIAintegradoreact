import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { 
  InputLabelStylos,
  InputContainerStylos,
  LoginInputStylos,
  ErrorMessageStylos, 
} from './LoginInputStylos';

const LoginInput = ({ name, type, label,isError }) => {
  return (
    <InputContainerStylos>
    <InputLabelStylos htmlFor={label}>{label}</InputLabelStylos>
     <Field
        name={name}
        type={type}
        error={isError}
        id={label}
        as={LoginInputStylos}
       
    />
     <ErrorMessage name={name} component={ErrorMessageStylos} />

    </InputContainerStylos>
      )}
   

export default LoginInput;