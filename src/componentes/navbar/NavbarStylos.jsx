import { NavLink } from "react-router-dom";
import styled from "styled-components"; 

export const Navbarcontainerstylos = styled.header `
  background-color: #000000;
  color: #ffffff;
	display: flex;
	justify-content: space-between;
  padding: 2rem;
	align-items: center;
	height: fit-content;

 li{
  list-style-type: none;
    display: flex;
    gap: 1rem;
 }
	img{
    max-width: 7rem;
	
    border-radius: 50%;

  }

@media (max-width: 1099px) {
  img {
    margin-left: 0;
    margin-bottom: 10px;
  }
  ul{
    
        
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #1c1c1c;
        padding: 2rem;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);
  }
}
`;


export const LinckStylos= styled(NavLink) `
list-style:none;
text-decoration:none;
color: white;
font-size: 20px;


`

export const ContainerLinckStylos= styled.div `
	color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  font-size: 22px;
  cursor: pointer;

  h2{
    font-size:22px;
    font-weight:600;
  }
  

  @media (max-width: 1099px) {
    display: none;
  }
 `;

export const MenuStylos = styled.div`
  display: none;
	cursor: pointer;
	font-size: 40px;
  
  
  
  @media (max-width: 1099px) {
    display: block;
    position: relative;
  }
`;

export const ModalCont = styled.div`
  
`;