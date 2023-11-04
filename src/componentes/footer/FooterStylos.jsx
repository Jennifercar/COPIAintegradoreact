import styled from "styled-components"; 

export const FooterContainerStylos = styled.div `
    background: -webkit-linear-gradient(black, #2b5a8d, #4b7d86);
	display: flex;
	color: #fff;
	justify-content: space-around;
    padding-top:20px;
    padding-bottom:20px;
    font-size:20px;

    @media (max-width: 639px) {
        justify-content: center;
        align-items: center;
		flex-direction:column;
        gap:20px;
	}
    
    
`
export const ContainerContactoStylos = styled.div `
    display:flex;
    justify-content: center;
	flex-direction: column;
    font-size:30px;


    @media (max-width: 320px) {
    font-size: 20px; 
  }
    
`;

export const ContactoStylos = styled.div `
	font-size:27px;

    @media (max-width: 320px) {
    font-size: 20px; }
`;
export const RedesContainerSocialeStylos = styled.div `
display:flex;
    justify-content: center;
	flex-direction: column;
    font-size:30px;
`
export const RedeSocialeStylos = styled.div `
    display:flex;
    justify-content:center;
	color: #fff;
    font-size:40px;
`