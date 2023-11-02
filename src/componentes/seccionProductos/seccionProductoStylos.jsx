import styled from "styled-components"; 

export const SeccionContainerStylos = styled.div`
	padding-top: 30px;
	color:white;
	background-color: #051b28;
	display: flex;
	justify-content:center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	
	
	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const ContainerProductosStylos = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	width: 100%;
	flex-wrap: wrap;
	gap: 32px;
	
`;
export const Productos = styled.div`
	background: #0b2739;
	width: 300px;
	border-radius: 8px;
	padding: 1rem;
	

	img {
		width: 100%;
		border-radius:8px;
		
	}
	h1 {
		font-weight: 600;
		margin: 0;
		color:#ffffff;
	}
	h2 {
		color: #ffffff;
		font-weight:400;
	}
	h3{
		font-weight:400;
	}
	@media (max-width: 768px) {
		width: 250px;
		text-align: left;
	}
`;
export const BotonCompraStylos =styled.button`
	display: flex;
	justify-content: center;
	border-radius: 20px;
	border-color: #ff008a;
	background-color: #0b2739;
	color: #fff;
	margin-bottom: 15px;
	width: 150px;
    height: 38px;
	cursor: pointer;
	font-size:19px;
`