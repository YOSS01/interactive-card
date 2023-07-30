import React from 'react';
import {Link} from 'react-router-dom';

// Pictures
import iconComplete from '../../images/icon-complete.svg';

function Complete() {
  return (
    <div className='lg:w-[45%] w-full lg:h-full flex justify-center items-center'>
      <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-[80%] flex flex-col items-center gap-5 py-10">
        <div>
          <img src={iconComplete} alt="" />
        </div>
        <div className='text-center'>
          <span className='text-2xl font-semibold uppercase tracking-[.25rem]' style={{color: 'hsl(278, 68%, 11%)'}}>Thank you!</span>
        </div>
        <div className='text-center'>
          <span className='text-sm' style={{color: 'hsl(279, 6%, 55%)'}}>We've added your card details</span>
        </div>
        <Link className='w-full text-white py-3 flex justify-center items-center rounded-lg' style={{background: 'hsl(278, 68%, 11%)'}} to='https://youssefalahyane.com/' target='_blank'>Continue</Link>
      </div>
    </div>
  )
}
export default Complete;