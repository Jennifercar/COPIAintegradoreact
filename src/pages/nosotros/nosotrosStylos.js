import styled from 'styled-components';


export const NosotrosContainerStylos = styled.div `
width: 100%;
display:flex;
justify-content:center;
flex-direction:column;
position: relative;
background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.95)),
    url("/img/recital.jpg");
background-size: cover;
background-position:center;
filter: brightness(120%);
color:white;
padding:50px 0;
overflow: hidden;

`;

export const NosotroStylos = styled.div `
  width: 500px;
  height: auto;
  display: flex;
  align-items: center;
  background-color: rgba(11, 39, 57, 0.7);
  padding:30px;
  border-radius:19px;
  margin: 20px 134px 30px;
  color:white;

  @media (max-width: 1410px){
    margin: 20px 0 30px 42px;
  }
  @media (max-width: 645px){
    width:75%;
    margin: 0 auto;
    
  }

`;
export const ContainerTextoNosotros = styled.div `
flex-direction:column;
  font-size:20px;
	color:white;
  gap:16px;
  z-index:9;
`

export const BeneficiosStylos = styled.div `
display:flex;
align-items:center;
justify-content:center;

width:70%;
height: auto;
background-color:#59b6f0;
margin-left:134px;
margin-bottom:10px;
border-radius:19px;
color:black;
padding:20px 0;


ul{
  display:flex;
align-items:center;
gap:50px;
padding-left:0px;

@media (max-width: 960px){
    flex-direction:column;
    gap:20px;
    justify-content:center;
    align-items: center; 
    text-align: center;
    
  }
  
}
ul li {
  
  list-style:none;
  font-size:21px;
  font-weight:bold;
  text-align: center;

}

@media (max-width: 1410px){
    margin: 20px 0 30px 42px;
    width: 95%;
    text-align:center;
  }
  @media (max-width: 960px){
    margin: 20px auto;
    height:auto;
    
  }
 
`


 