import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStylos = styled.div`
  display: flex;
  height:628px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  color:white;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;