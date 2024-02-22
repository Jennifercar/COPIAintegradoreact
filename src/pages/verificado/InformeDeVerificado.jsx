import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const InformeDeVerificado = () => {

const usuarioActual = useSelector(state => state.usuario.usuarioActual);

const navigate = useNavigate();


  return (

    <div>
    {usuarioActual?.verificado ? (
      <h1>Tu usuario ha sido verificado correctamente</h1>
    ):(
      <div>
        <h1>Valida  tu cuenta para poder acceder a la plataforma</h1>
   <button 
   onClick={()=>navigate('/validarCuenta')}>
     validar usuario
  </button>

      </div>
      )
    
    }
    </div>
  )
}

export default InformeDeVerificado