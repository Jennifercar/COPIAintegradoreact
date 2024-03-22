import styled from 'styled-components';
import { Form } from 'formik';


export const RegistroContainerStylos = styled.div `
height:628px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap: 25px;



h1 {
  color:white;
}


`;
export const FormStylos = styled(Form) `
 display: flex;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;
 gap:15px;
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
  background-color: transparent; 
  color: white; 
  border-radius:5px;
  border: 1px solid;
  padding: 3px 19px;
  font-size: 1.5rem;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 
  
  &:hover {
    color:  rgb(106, 106, 207); 
  }
  
  @media (max-width: 639px) {
    font-size: 1rem;
	}
`;
export const LinckStylos =styled.div`

font-size:20px;

color: #7582f3;



`