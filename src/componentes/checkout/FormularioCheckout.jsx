import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { checkoutInitialValues } from '../../formik/checkoutFormik/checkoutInitialValues';
import { checkoutValidationSchema } from '../../formik/checkoutFormik/checkoutValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { crearCompra } from '../../axios/axiosCompras';
import { vaciarCarrito } from '../../redux/modalSlice/modalSlice';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({productoDelCarrito, precio}) => {


  const dispatch = useDispatch()

  const navigate = useNavigate();
  
  const {usuarioActual} = useSelector(state => state.usuario)

  return (
    <Formik
      initialValues={checkoutInitialValues}
      validationSchema={checkoutValidationSchema}
      onSubmit={ async (values) => {
        const compraData = {
          items: productoDelCarrito,
          precio,
          informacionEnvio: {
            ...values
          }
        };

        try {
          await crearCompra(compraData, dispatch, usuarioActual);
          navigate('/miCompra')
          dispatch(vaciarCarrito());
          
        } catch (error) {
          console.log(error);
          alert("error al crear su compra")
        }

      } }
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="div" />
          </div>

          <div>
            <label htmlFor="celular">Celular</label>
            <Field type="text" name="celular" />
            <ErrorMessage name="celular" component="div" />
          </div>

          <div>
            <label htmlFor="localizacion">Localización</label>
            <Field type="text" name="localizacion" />
            <ErrorMessage name="localizacion" component="div" />
          </div>

          <div>
            <label htmlFor="domicilio">Domicilio</label>
            <Field type="text" name="domicilio" />
            <ErrorMessage name="domicilio" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Iniciar Pedido'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;




