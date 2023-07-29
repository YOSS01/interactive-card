import React from 'react';
import {Link} from 'react-router-dom';

// Pictures
import iconComplete from '../../images/icon-complete.svg';

function Complete() {
  return (
    <div className='w-[45%] h-full flex items-center'>
      <dir className="w-[60%] flex flex-col justify-center items-center gap-5">
        <div>
          <img src={iconComplete} alt="" />
        </div>
        <div>
          <span className='text-2xl font-semibold uppercase tracking-[.25rem]' style={{color: 'hsl(278, 68%, 11%)'}}>Thank you!</span>
        </div>
        <div>
          <span className='text-sm' style={{color: 'hsl(279, 6%, 55%)'}}>We've added your card details</span>
        </div>
        <Link className='w-full text-white py-3 flex justify-center items-center rounded-lg' style={{background: 'hsl(278, 68%, 11%)'}} to='https://youssefalahyane.com/' target='_blank'>Continue</Link>
      </dir>
    </div>
  )
}
export default Complete;