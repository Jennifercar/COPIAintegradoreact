import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import { checkoutInitialValues } from '../../formik/checkoutFormik/checkoutInitialValues';
import { checkoutValidationSchema } from '../../formik/checkoutFormik/checkoutValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { crearCompra } from '../../axios/axiosCompras';
import { vaciarCarrito } from '../../redux/modalSlice/modalSlice';
import { useNavigate } from 'react-router-dom';


const CheckoutFormContainerStylos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const InputField = styled(Field)`
  border: 1px solid #ccc;
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

const CheckoutForm = ({ productoDelCarrito, precio }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usuarioActual } = useSelector(state => state.usuario);

  return (
    <CheckoutFormContainerStylos>
      <h1>Checkout</h1>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const compraData = {
            items: productoDelCarrito,
            precio,
            informacionEnvio: { ...values }
          };

          try {
            await crearCompra(compraData, dispatch, usuarioActual);
            navigate('/Compras');
            dispatch(vaciarCarrito());
          } catch (error) {
            console.log(error);
            alert("Error al crear su compra");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <InputField type="text" name="nombre" />
              <ErrorMsg name="nombre" component="div" />
            </div>

            <div>
              <label htmlFor="celular">Celular</label>
              <InputField type="text" name="celular" />
              <ErrorMsg name="celular" component="div" />
            </div>

            <div>
              <label htmlFor="localizacion">Localización</label>
              <InputField type="text" name="localizacion" />
              <ErrorMsg name="localizacion" component="div" />
            </div>

            <div>
              <label htmlFor="domicilio">Domicilio</label>
              <InputField type="text" name="domicilio" />
              <ErrorMsg name="domicilio" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Iniciar Pedido'}
            </button>
          </Form>
        )}
      </Formik>
    </CheckoutFormContainerStylos>
  );
};

export default CheckoutForm;
