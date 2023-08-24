import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import  Login  from '../pages/login/Login'


const Routes = () => {
  return (
    
    
<ReactDomRoutes>

<Route path="/" element={<Inicio />} />
<Route path="/login" element={<Login />} />

</ReactDomRoutes>
   
  
  )
}

export default Routes