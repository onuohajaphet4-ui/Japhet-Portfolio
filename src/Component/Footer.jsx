import React from 'react'
import './Footer.css'
import { IoLogoWhatsapp, IoLogoLinkedin,IoLogoGithub,IoLogoTwitter } from 'react-icons/io5'
const Footer = () => {
  return (
    <div className='foot'>
        <h4>
            ©2025 Onuoha Japhet
        </h4>
      <div className="foot-icon">
       <a href="https://wa.me/2347074293026" style={{textDecoration:'none'}}> <IoLogoWhatsapp color='White' size={30}/></a>
       <a href="https://www.linkedin.com/in/japhet-onuoha-535936311?" style={{textDecoration:'none'}}> <IoLogoLinkedin color='White' size={30}/></a>
       <a href="https://github.com/onuohajaphet4-ui" style={{textDecoration:'none'}}> <IoLogoGithub color='White' size={30}/></a>
       <a href="https://x.com/arinzehaf?" style={{textDecoration:'none'}}> <IoLogoTwitter color='white' size={30}/></a>
     </div>
    </div>
  )
}

export default Footer
