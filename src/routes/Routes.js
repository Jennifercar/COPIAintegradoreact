import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Nosotros from '../pages/nosotros/Nosotros'


const Routes = () => {
  return (
    
    
<ReactDomRoutes>

<Route path="/" element={<Inicio />} />
<Route path="/nosotros" element={<Nosotros />} />

</ReactDomRoutes>
   
  
  )
}

export default Routes