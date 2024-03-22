import axios from "axios";
import { BASE_URL } from "../util/constantes";

export const createUsuario = async (nombre, email, contraseña) => {
    try {   
        const response = await axios.post(`${BASE_URL}auth/registro`,{
            nombre,
            email,
            contraseña
        });
        return response.data;
        
    } catch (error) {
        console.log(error);
        if(error.response.status === 400) {
            alert('El email ya existe en la base de datos. Por favor, ingresa a tu cuenta.')
          }
    }
}

export const loginUsuario = async (email, contraseña) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/login`, {
          email, 
          contraseña});
        return response.data
    } catch (error) {
        console.log(error);
        if(error.response.status === 404) {
            alert('El email no se encuentra en la base de datos. Por favor, crea tu cuenta.')
        }
        if(error.response.status === 401) {
            alert('La contraseña es incorrecta. Por favor, intentelo nuevamente.')
        }
    }
}


export const verificarUsuario = async (email, code) => {
  try {
 const response = await axios.patch(`${BASE_URL}auth/verifica`, {
  email,
  code,
 });
return response.data;

} catch (error) {
  console.log(error);
  if(error.response.status === 404) {
    alert('El usuario no se encuntra en la base de datos. Por favor, intentelo nuevamente.')
  }
  if(error.response.status === 400) {
    alert('El usuario ya fue verificado.')
  }
  if(error.response.status === 401) {
    alert('El codigo ingresado no es válido. Por favor, intentelo nuevamente.')
  }

}
 
};