import styled from 'styled-components';

import { Form } from 'formik';

const baseFontSize = '1rem';

export const ContactosContainerStylos = styled.div `
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background-color: black;


`;

export const MapaStylos = styled.div `
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
padding:0 60px;
color: white;
`;
//agregar mediaqq

export const FormContainer = styled.div `
width: 80%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: black;
color:white;



`;

export const FormStylos = styled(Form) `
 display: flex;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;
 gap:15px;
 

  
`;


export const TituloForm = styled.h1 `

font-size: ${parseFloat(baseFontSize) * 1.5}rem;
`;


export const InputContainerStylos =styled.div`
font-size: 1rem;
display: flex;
gap:5px;
flex-direction: column;
align-items:center;
justify-content:center;

`


export const InputLabelStylos =styled.label`
font-size: 1rem;
align-self:flex-start;


`
export const InputStylos = styled.input`
	border: 1px solid;
	border-color: ${({ error }) => (error ? "error" : "white")};
	border-radius: 5px;
  padding: 0.5vw 7vw;
	width: 100%;
	background: transparent;
	color: white;
	outline: none;
 
`;
export const ErrorSpanStylos =styled.span`

color:red;

`
export const FormButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #4283ac; 
  border: 1px solid;
  padding: 3px 19px;
  font-size: ${parseFloat(baseFontSize) * 1.5}rem;
  margin: 0 auto;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 
  
  &:hover {
    color:  rgb(106, 106, 207); 
  }
  
`;