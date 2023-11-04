import styled from 'styled-components';
import imgen from '../../componentes/assets/pexels-erik-mclean-4065806.jpg';

export const ContactosContainerStylos = styled.div `
width: 100%;
display: flex;

background-color: black;

`;
export const ContactoStylos = styled.div `
display:flex;
justify-content:center;
    width: 50%;
    height: 50vh;
    background-image: url(${imgen});
    background-size: cover;
    
`;
export const ParrafoContactos = styled.p`
        width:90%;
        display:flex;
        align-items:center;
        font-family: 'Arial, sans-serif'; 
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.5);
       text-align:center;
        color:white;
`


export const FormContainer = styled.div `
width: 50%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

background-color: black;
color:white;
`;

export const TituloForm = styled.h1 `


`;
export const SubtituloForm = styled.h2 `



`;

