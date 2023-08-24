import styled from "styled-components"; 

export const ContainerCategorias = styled.div `
    width: 100%;
    height:fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(/img/f9a98ff98167367f51f30db94eb85514.jpg);
    padding-top:20px;

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
	font-size:25px;
	border-style: none;
	margin: 5px;
	padding: 16px;
    
`