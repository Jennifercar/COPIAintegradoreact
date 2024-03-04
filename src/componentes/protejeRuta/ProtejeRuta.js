import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtejeRuta = ({ children, redirectTo }) => {
  const { usuarioActual } = useSelector((state) => state.usuario);

  return usuarioActual ? children : <Navigate to={redirectTo} />;
};

export default ProtejeRuta;