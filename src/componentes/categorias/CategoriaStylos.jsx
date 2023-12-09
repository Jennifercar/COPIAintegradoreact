import styled from "styled-components"; 

export const ContainerCategorias = styled.div `
    width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	
    
	text-align: center;

    @media (max-width: 1099px) {
		flex-direction:column
	}



`
export const BotonContainerStylos =styled.button`
    color:white;
	font-size:20px;
	background-color:transparent;
	border:none;
	cursor: pointer;
	transition: background-color 2s ease; 
	
  &:hover {
    color:  rgb(29, 59, 230); 
	
  }
    
`