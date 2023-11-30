import styled from 'styled-components';


export const NosotrosContainerStylos = styled.div `
width: 100%;
display:flex;
justify-content:center;
align-items: center;
background: #0b2739;


  img{
    width:50vh;
    @media (max-width: 879px){
      width:90%;
    }
  }
   
  @media (max-width: 879px) {
    display:flex;
    flex-direction: column;
    justify-content:center;
    
  }
  
`;

export const NosotroStylos = styled.div `
width: 50%;
  font-size:2vh;
	color:white;
  margin:1vw;;

`;

 