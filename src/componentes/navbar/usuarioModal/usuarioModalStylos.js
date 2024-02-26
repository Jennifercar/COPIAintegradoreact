import styled from 'styled-components';

export const ModalUsuarioContainerStylos = styled.div`
  position: absolute;
  backdrop-filter: blur(29.400000000000006px);
  box-shadow:  0 0 20px 1px rgba(255, 255, 255, 0.2);
  width: 200px;
  top: ${({ isOpen }) => (isOpen ? '120px' : '-200px')};
  right: 20px;
  transition: top 0.6s ease; 
  z-index: 8;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden; 
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    color:wheat;
  }
  
`;
export const ListaModalUsuarioStylos = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;
  
`;


