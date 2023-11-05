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
    font-size: 3vw;
    margin: 5px 50px 10px;

   
    @media (max-width: 1000px){
      font-size: 6vw;
    }
  
}

h2 {
    font-size: 2vw;
    margin: 5px 50px 10px;

    @media (max-width: 1000px){
      font-size: 5vw;
    }
  }

p{
    font-size: 1 vw;
    max-width: 600px;
    margin: 5px 50px 10px;
    @media (max-width: 1000px){
      font-size: 3vw;
    }
  }

`
export const ReservaAquiButton = styled(NavLink)`
  background-color: rgba(0, 0, 0, 0.5); 
  color: #4283ac; 
  border: none;
  
  font-size: 1.5rem;
  margin: 5px 50px 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; 

  &:hover {
    color:  rgb(106, 106, 207); 
  }
`;



