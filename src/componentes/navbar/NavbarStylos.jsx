import { NavLink } from "react-router-dom";
import styled from "styled-components"; 

export const Navbarcontainerstylos = styled.header `
  background-color: #000000;
  color: #ffffff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: fit-content;

 li{
  list-style: none;
  padding: 5px;
 }
	img{
    width: 210px;
    height:210px;
	
    border-radius: 50%;

  }

@media (max-width: 1099px) {
  img {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
`;


export const LinckStylos= styled(NavLink) `
list-style:none;
text-decoration:none;
color: white;
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
	color:white;
  color: #ffffff;
  
  @media (max-width: 1099px) {
    display: block;
  }
`;

export const ModalCont = styled.div`
  
`;



