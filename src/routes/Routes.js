import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Nosotros from '../pages/nosotros/Nosotros'
import PaginaDeProductos from '../pages/PaginaDeProductos/PaginaDeProductos'
import Inicio from '../pages/inicio/Inicio'


const Routes = () => {
  return (
    
    
<ReactDomRoutes>

<Route path="/" element={< Inicio/>} />
<Route path="paginaDeProductos" element={<PaginaDeProductos />} />
<Route path="/nosotros" element={<Nosotros />} />

</ReactDomRoutes>
   
  
  )
}

export default Routes