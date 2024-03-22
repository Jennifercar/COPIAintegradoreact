import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FormButton } from '../registro/registroStylos';

const InformeDeVerificado = () => {

const usuarioActual = useSelector(state => state.usuario.usuarioActual);

const navigate = useNavigate();

const containerStylos = {
  color:'white',
  height:'630px',
  display:'flex',
  flexDirection: "column",
  justifyContent:"center" ,
  alignItems: "center",
  
};
  return (

    <div style={containerStylos}>
    {usuarioActual?.verificado ? (
      <h1>Tu usuario ha sido verificado correctamente</h1>
    ):(
      <div>
        <h1>Valida  tu cuenta para poder acceder a la plataforma</h1>
   <FormButton 
   onClick={()=>navigate('/validarCuenta')}>
     validar usuario
  </FormButton>

      </div>
      )
    
    }
    </div>
  )
}

export default InformeDeVerificado