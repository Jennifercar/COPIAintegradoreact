import React from 'react';
import { FormButton } from '../../../../pages/registro/registroStylos';

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <FormButton
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </FormButton>
  );
};

export default Submit;