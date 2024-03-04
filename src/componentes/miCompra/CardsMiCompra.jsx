import { useSelector } from 'react-redux';

import CardMiCompra from './CardMiCompra';


const CardsMiCompra = () => {

  const {compras, error} = useSelector(state => state.compras);

  if (error) {
    return <h2> {error} </h2>
  }

  return (
    <div>
      {
        compras?.length ? (
            compras.map((compra) => {
            return <CardMiCompra {...compra} key={compra._id} />
          })
        ) : (
          <h2>Que esperás para hacer tu primer pedido?</h2>
        )
      }
     
    </div>
  );
};

export default CardsMiCompra;
