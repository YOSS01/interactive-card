import React from 'react';

// Pictures
import BgDesktop from '../images/bg-main-desktop.png';
import BgMobile from '../images/bg-main-mobile.png';

function Picture() {
  return (
    <div className='h-full w-[35%]'>
      <img className='block w-full h-full object-fill' src={BgDesktop} alt="Background pic" />
      <img className='hidden' src={BgMobile} alt="Background pic" />
    </div>
  )
}
export default Picture;