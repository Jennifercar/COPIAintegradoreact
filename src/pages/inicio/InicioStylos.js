import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const InicioContainerStylos = styled.div `
width: 100%;
height:75vh;
position: relative;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}
`;
export const InicioStylos = styled.div `
position:absolute;
width:100%;
height: 100%;
top:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
color:white;
background-color: rgba(0, 0, 0, 0.8); 

h1{
    font-size: 3rem;
    margin: 5px 50px 10px;
}

h2 {
    font-size: 2rem;
    margin: 5px 50px 10px;
  }

p{
    font-size: 1.5rem;
    max-width: 600px;
    margin: 5px 50px 10px;
  }

`
export const ReservaAquiButton = styled(NavLink)`
  background-color: rgba(0, 0, 0, 0.5); 
  color: #4283ac; 
  border: none;
  padding: 10px 30px;
  font-size: 1.5rem;
  margin: 5px 50px 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 

  &:hover {
    color:  rgb(106, 106, 207); 
  }
`;

export const ButtonConteinerStylos = styled.div `
display: flex;
justify-content: center;
align-items: center;
`