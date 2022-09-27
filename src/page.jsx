import React from 'react';
import image from './images/images.jpeg';
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'

import './page.css';

function Page() {
  return (
    <div className='page'>
      <div className='head'>
        <img className='profile-pic' src={ image } alt="axl rose"/>
        <p>@instagram</p>
      </div>
      <div className='body'>
        <div>LINK 1</div>
        <div>LINK 2</div>
        <div>LINK 3</div>
        <div>LINK 4</div>
      </div>
      <div className='foot'>
        <img src={ instagram } alt="instagram" />
        <img src={ facebook } alt="facebook" />
        <img src={ linkedin } alt="linkedin" />
      </div>
    </div>
  )
}

export default Page;
