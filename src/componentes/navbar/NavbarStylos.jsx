import { NavLink } from "react-router-dom";
import styled from "styled-components"; 

export const Navbarcontainerstylos = styled.header `
  background-color: #000000;
  color: #ffffff;
	display: flex;
	justify-content: space-between;
  border:25px;
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
    
        width:100%;
        position:absolute;
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index:2;
        
        
  }
  
}
`;


export const LinckStylos= styled(NavLink) `
list-style:none;
text-decoration:none;
color: white;
font-size: 20px;
padding-left: 6px;
&:hover {
    color: #5656e6; }

    @media (max-width: 1099px) {
      font-size: 30px;
      display:flex;
      justify-content:center;
     }
`

export const ContainerLinckStylos= styled.div `
	color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  font-size: 22px;
  cursor: pointer;
  padding-right: 34px;

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
  padding-right: 25px;
  
  
  
  @media (max-width: 1099px) {
    display: block;
    position: relative;
  }
`;

export const ModalCont = styled.div`
  
`;