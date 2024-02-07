import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Nosotros from '../pages/nosotros/Nosotros'
import PaginaDeProductos from '../pages/PaginaDeProductos/PaginaDeProductos'
import Inicio from '../pages/inicio/Inicio'
import Registro from '../pages/registro/Registro'
import Login from '../pages/login/Login'

const Routes = () => {
  return (
    
    
<ReactDomRoutes>

<Route path="/" element={< Inicio/>} />
<Route path='/login' element={<Login />} />
<Route path="registro" element={< Registro/>} />
<Route path="paginaDeProductos" element={<PaginaDeProductos />} />
<Route path="/nosotros" element={<Nosotros />} />

</ReactDomRoutes>
   
  
  )
}

export default Routes