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
    }
}


export const verificarUsuario = async (email, code) => {
  try {
 const response = await axios.patch(`${BASE_URL}auth/verifica`, {
  email,
  code,
 });
console.log('Usuario verificado');
return response.data;

} catch (error) {
  console.log(error);
  return error (error.response.data.msg);

}
 
};