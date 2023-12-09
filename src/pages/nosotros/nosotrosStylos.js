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
font-family: 'CircularStd', sans-serif;
`;

export const NosotroStylos = styled.div `
  width: 25%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: rgba(11, 39, 57, 0.7);
  padding:30px;
  border-radius:19px;
  margin: 20px 134px 30px;
  color:white;
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
height: 130px;
background-color:#59b6f0;
margin-left:134px;
margin-bottom:10px;
border-radius:19px;
color:black;


ul{
  display:flex;
align-items:center;
justify-content:center;
gap:50px;
  


}
li{
  
  
  list-style:none;
  font-size:25px;
  font-weight:bold;
}
`

 