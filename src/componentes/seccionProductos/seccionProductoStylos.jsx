import styled from "styled-components"; 

export const SeccionContainerStylos = styled.div`
	
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
	height: 450px;
	object-fit: cover;
	border-radius: 8px;
	padding: 1rem;
	max-width:1400px;
	display:flex;
	flex-direction:column;
	align-items:flex-start;
	
	

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
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
	align-items:center;
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
export const MensajeConfirmacion = styled.div`
 position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
  text-align: center;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(${props => props.mensaje ? '0' : '100%'});
  
`