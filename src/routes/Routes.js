import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Nosotros from '../pages/nosotros/Nosotros'
import PaginaDeProductos from '../pages/PaginaDeProductos/PaginaDeProductos'
import Inicio from '../pages/inicio/Inicio'
import Registro from '../pages/registro/Registro'
import Login from '../pages/login/Login'
import InformeDeVerificado from '../pages/verificado/InformeDeVerificado'
import ValidarCuenta from '../pages/verificado/ValidarCuenta'
import CheckoutTicket from '../pages/checkout/CheckoutTicket'
import Compras from '../pages/miCompra/MiCompra'
//import ProtejeRuta from '../componentes/protejeRuta/ProtejeRuta'



const Routes = () => {
  return (
    
    
<ReactDomRoutes>

<Route path="/" element={< Inicio/>} />
<Route path='/login' element={<Login />} />
<Route path="/registro" element={< Registro/>} />
<Route path="/informeDeVerificado" element={< InformeDeVerificado/>} />
<Route path="/validarCuenta" element={< ValidarCuenta/>} />
<Route path="/paginaDeProductos" element={<PaginaDeProductos />} />
<Route path="/nosotros" element={<Nosotros />} />
<Route path="/Compras" element={<Compras />} />
<Route path='/checkoutTicket' element={<CheckoutTicket />} />

  

</ReactDomRoutes>
   
  
  )
}

export default Routes
//<ProtejeRuta redirectTo="/registro">
//<CheckoutTicket />
//</ProtejeRuta>