import styled from "styled-components"; 

export const ContainerCategorias = styled.div `
    width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(/img/f9a98ff98167367f51f30db94eb85514.jpg);
    padding-top:20px;
	text-align: center;
    @media (max-width: 1099px) {
		flex-direction:column
	}



`
export const BotonContainerStylos =styled.button`
    color:rgb(211, 197, 197);
	border-radius: 10px;
	background-image: url(./img/f9a98ff98167367f51f30db94eb85514.jpg);
	background-position:center;
	background-size:auto;
	font-size:20px;
	border-style: none;
	margin-bottom:10px;
	padding: 3px;
	transition: background-color 0.3s ease; 

  &:hover {
    color:  rgb(135, 135, 139); 
  }
    
`