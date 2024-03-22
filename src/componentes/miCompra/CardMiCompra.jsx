import { useNavigate } from 'react-router-dom';
import { formatoData } from '../../util/formatoData';
import { formatoPrecio } from '../../util/formatoPrecio';

const CardMisOrdenes = ({createdAt, total, _id}) => {

  const navigate = useNavigate();

  const tituloStylos = {
    fontSize: '15px',
   
  };

  return (
    <div style={tituloStylos} onClick={() => navigate(`${_id}`)}>
      <div>
        <h1>ID de la orden: {_id.slice(0, 7)}</h1>
        <h3>Fecha {formatoData(createdAt)}hs</h3>
        <h3>{formatoPrecio(total)}</h3>
      </div>
      
    </div>
  );
};

export default CardMisOrdenes;
