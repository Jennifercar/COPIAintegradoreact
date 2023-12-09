import { createGlobalStyle } from 'styled-components';

export const EstilosGlobales = createGlobalStyle`
html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0 ;
    padding: 0;
    background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 23%, rgba(5,27,40,1) 68%, rgba(0,34,78,1) 91%);
 
    }
`;