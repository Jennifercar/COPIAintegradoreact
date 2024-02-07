import axios from 'axios';
//import { BASE_URL } from '../util/constantes';

export const createUsuario = async (nombre, email, contraseña) => {
  try {
    await axios.post(`http://localhost:8080/auth/registro
    `, {
      nombre,
      email,
      contraseña,
    });

    const usuario = await loginUsuario (email, contraseña);
    return usuario;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.errors[0].msg);
  }
};

export const loginUsuario = async (email, contraseña) => {
  try {
    const response = await axios.post(`http://localhost:8080/auth/login`, {
      email,
      contraseña,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};



export const verificarUsuario = async (email, code) => {
  try {
 const response = await axios.patch(`https://tu-ticket-api.vercel.app/`, {
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