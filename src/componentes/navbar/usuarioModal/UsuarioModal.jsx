import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarioActual, toggleMenuHidden } from '../../../redux/usuarioSlice/UsuarioSlice';
import { ListaModalUsuarioStylos, ModalUsuarioContainerStylos } from './usuarioModalStylos';

const UsuarioModal = () => {
    const { usuarioActual, hiddenMenu } = useSelector(state => state.usuario);
    const dispatch = useDispatch();

    return (
        <ModalUsuarioContainerStylos isOpen={!hiddenMenu}>
            { !hiddenMenu &&
                <ListaModalUsuarioStylos>
                    <h2>{usuarioActual?.nombre}</h2>
                    <a href="/login"> Mis ordenes</a>
                    <span onClick={() => {
                        dispatch(setUsuarioActual(null));
                        dispatch(toggleMenuHidden());
                    }}>Cerrar Sesión</span>
                </ListaModalUsuarioStylos>
            }
        </ModalUsuarioContainerStylos>
    );
};

export default UsuarioModal;
