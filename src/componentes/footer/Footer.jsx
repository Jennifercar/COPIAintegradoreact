import React from 'react'
import { ContactoStylos, ContainerContactoStylos, FooterContainerStylos, RedeSocialeStylos, RedesContainerSocialeStylos } from './FooterStylos'
import {BiLogoPinterestAlt,BiLogoFacebook,BiLogoInstagram ,BiSolidMap} from "react-icons/bi"


const Footer = () => {
  return (
    <>
    <FooterContainerStylos>

      <ContainerContactoStylos>Nos Ubicamos en:

      <ContactoStylos>  
      <BiSolidMap/>  Santa Rosa, LP 
      </ContactoStylos>


      </ContainerContactoStylos>



<RedesContainerSocialeStylos>Siguenos en :
  <RedeSocialeStylos>

   <BiLogoInstagram/>
   <BiLogoFacebook/>
   <BiLogoPinterestAlt/>

  </RedeSocialeStylos>
</RedesContainerSocialeStylos>



    </FooterContainerStylos>
    </>
    
  )
}

export default Footer