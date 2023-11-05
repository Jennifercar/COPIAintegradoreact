import styled from 'styled-components';
import imgen from '../../componentes/assets/pexels-erik-mclean-4065806.jpg';
import { Form } from 'formik';

export const ContactosContainerStylos = styled.div `
width: 100%;
display: flex;

background-color: black;
@media (max-width: 1000px){
      flex-direction:column;
    }

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
        font-size: 2vw;
        background-color: rgba(0, 0, 0, 0.5);
       text-align:center;
        color:white;
        @media (max-width: 1000px){
      font-size: 3vw;
    }
`


export const FormContainer = styled.div `
width: 50%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;
margin-left: 35px;
background-color: black;
color:white;
`;

export const FormStylos = styled(Form) `
 display: flex;
 flex-direction:column;
 align-items:flex-start;
 flex-wrap: wrap;
 gap:15px;
 column-gap: 30px;
	row-gap: 25px;
`

export const TituloForm = styled.h1 `


`;


export const InputContainerStylos =styled.div`
font-size: 1rem;
display: flex;
gap:5px;
flex-direction: column;
align-items:center;
align-items: flex-start;
`


export const InputLabelStylos =styled.label`
font-size: 1rem;
display: flex;
align-items:flex-start;


`
export const InputStylos = styled.input`
	border: 1px solid;
	border-color: ${({ error }) => (error ? "error" : "white")};
	border-radius: 5px;
  padding: 1vw 7vw;
	width: 100%;
	background: transparent;
	color: white;
	outline: none;
`;
export const ErrorSpanStylos =styled.span`

color:red;

`
export const FormButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5); 
  color: #4283ac; 
  border: 1px solid;
  padding: 3px 19px;
  font-size: 1.5rem;
  margin: 5px 50px 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 

  &:hover {
    color:  rgb(106, 106, 207); 
  }
`;