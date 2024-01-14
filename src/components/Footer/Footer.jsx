import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss'
const Foorter = () => {
  return (
    <div className='bottom'>
    <div className='footer'>
      <div className='col1'>
        <div className='r1'>
          <img src='../../images/formlogo 2.png'/>
        </div>
        <div className='r2'>
          <FacebookIcon style={{color:'gray'}}/>
          <InstagramIcon style={{color:'gray'}}/>
          <XIcon style={{color:'gray'}}/>
          <LinkedInIcon style={{color:'gray'}}/>
        </div>
      </div>
      <div className='middle'>
      <div className='col2'>
        <span>About Us</span>
        <span>Sitemap</span>
        <span>Credits</span>
        <span>Help Center</span>
        <span>Community Guidelines</span>
      </div>
      <div className='col3'>
        <span>Accesibility</span>
        <span>Mobile</span>
        <span>Marketing</span>
        <span>Advertising</span>
        <span>Report Issue</span>
      </div>
      <div className='col4'>
        <span>Privacy Policy</span>
        <span>Terms and Condition</span>
        <span>Trust and Safety</span>
      </div>
      </div>
      <div className='col5'>
        <img src='../../images/Google_play.png' alt='get on google play'/>
        <img src='../../images/Apple_store.png' alt='get on apple store'/>
      </div>
    </div>
    <div className='copyrights'>
      <span>
        All trademarks are the properties of there respective owners
      </span>
      <span>
        All rights reserved © 2024 Intellfill Tech Pvt Ltd.
      </span>
    </div>
    </div>
  )
}

export default Foorter