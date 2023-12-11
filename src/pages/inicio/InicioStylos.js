import { NavLink } from "react-router-dom";
import styled from 'styled-components';



export const InicioContainerStylos = styled.div `

width: 100%;
height:800px;
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
color:white;
background-color: rgba(0, 0, 0, 0.8); 


`
export const ContainerTextoInicioStylos = styled.div `
padding:0 0 0 45px;
width:80%;
height: auto;
display:flex;
flex-direction:column;
align-items: flex-start;
justify-content:center;


@media (max-width: 953px){
  text-align:center;
  padding: 0;
  align-items: center;
  margin: 0 auto;
}

h1{
font-size: 3rem;
    
@media (max-width: 400px){
font-size: 2.5rem;

}

}

p{
    font-size: 2rem;
    max-width: 760px;
    @media (max-width: 400px){
font-size: 1.5rem;
max-width: 100%;

}
  }
`;

export const ReservaAquiButton = styled(NavLink)`
width:115px;
border-radius:5px;
display:flex;
align-items: center;
justify-content: flex-start;
font-size:1.2rem;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #4283ac; 
  border: none;
  padding:15px 0;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 

  &:hover {
    color:  rgb(106, 106, 207); 
  }
`;



