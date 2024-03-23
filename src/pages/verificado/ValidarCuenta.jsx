import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verificarinitialValues } from "../../formik/validacionFormik/verificarInitialValues";
import { verificarSchema  } from "../../formik/validacionFormik/verificarValidationSchema";
import { verificarUsuario } from "../../axios/axiosUsuario";

import Submit from "../../componentes/UI/login/submit/Submit";
import { setVerificado } from "../../redux/usuarioSlice/UsuarioSlice";
import { VerificadoContainerStylos } from "./verificadoStylos";
import LoginInput from "../../componentes/UI/login/LoginInput";

const ValidarCuenta = () => {
   const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const usuarioActual = useSelector(state => state.usuario.usuarioActual);

    useEffect(() => {
        console.log("Usuario actual:", usuarioActual);
        if (!usuarioActual) {
          console.log("Redirigiendo a /validarCuenta");
          navigate('/login');
        } else if (usuarioActual.verificado) {
          console.log("Redirigiendo a /");
          navigate("/");
        }
      }, [usuarioActual, navigate]);

return ( 
<VerificadoContainerStylos>
<h1>Valida tu cuenta</h1>
<h2>Su código de verificación ha sido enviado a su e-mail</h2>
<Formik
   initialValues={verificarinitialValues}
   validationSchema={verificarSchema}

   onSubmit={ async values => {

    await verificarUsuario( 
        usuarioActual.email ,
        values.code);
        dispatch(setVerificado());
        navigate("/");
        
    }
} 
>
    <Form>
        <LoginInput  
        name='code' 
        type="code" 
        placeholder='Código de verificación' />
        
        <Submit>Validar</Submit>
    </Form>
</Formik>
</VerificadoContainerStylos>



) 
}

export default ValidarCuenta