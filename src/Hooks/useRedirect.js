import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRedirect = (redirectTo) => {
  const { usuarioActual } = useSelector((state) => state.usuario);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioActual) {
      navigate(redirectTo);
    }
  }, [usuarioActual, redirectTo, navigate]);
};

export default useRedirect;
