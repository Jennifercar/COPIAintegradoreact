import styled from 'styled-components';


export const ProductosWrapperStylos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;

  
`;

export const ModalContainer = styled.div`
  width: 80%;
  backdrop-filter: blur(29.400000000000006px);
	display: flex;
	flex-direction: column;
	align-items: center;
	position:absolute;
	z-index: 9;
  top:12vh ;
`;

export const ModalContent = styled.div`
width: 95%;
	display: flex;
	align-items: center;
	justify-content:center;
  flex-direction:column;
	gap: 30px;
	
	padding: 20px;
	border-radius: 10px;
	
`;

export const ModalHeader = styled.h2`
  background-color: #051b28;
	display:flex;
	justify-content: center;
  justify-content: space-around;
	color: #fff;
	width: 100%;
  padding:5px;
`;



export const ModalFooter = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const ContadorButtonContainerStylos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalStylos = styled.span`
  padding: 10px;
  min-width: 100px;
  width: auto;
  font-size: 30px;
  text-align: center;
`;

export const ButtonStylos = styled.button`
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;

  &:hover {
    background-color: #051b20;
    
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding:10px;
  background-color: #2323234e;


  & img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
