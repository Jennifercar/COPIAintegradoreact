import styled from 'styled-components';


export const ProductosWrapperStylos = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
  gap: 35px;
  margin: 0 auto;
  width: 80%;
  max-width: 991px;
  padding: 20px;
  
`;

export const ModalContainer = styled.div`
width:100%;
display: flex; 
backdrop-filter: blur(29.400000000000006px);
justify-content: center;
flex-direction: column;
align-items: center;
position:absolute;
z-index: 9;
top:12vh ;
  

  @media (max-width: 800px){
 gap:5px;
    }
`;

export const ModalContent = styled.div`
width: 95%;
display: flex;
align-items: center;
justify-content:center;
flex-direction:column;
gap: 30px;
border-radius: 10px;
	
`;

export const ModalHeader = styled.h2`
background-color: #051b28;
display:flex;
justify-content: space-around;
color: #fff;
width: 100%;
  
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
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding:10px;
  background-color: #2323234e;

  img {
    max-width: 97px;
    min-width: 130px;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 800px){
    flex-direction:column;
    align-items: center;
    gap:2px;

   
  img {
    min-width: 238px; 
  }

    }
  
`;
