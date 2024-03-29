import styled from 'styled-components';


export const ButtonSubmitStyled = styled.button`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;