import React from 'react';

// Pictures
import cardLogo from '../../images/card-logo.svg';

function Recto({cardNumber, cardName, expMonth, expYear}) {

  return (
    <div className='bgRecto lg:w-[55vh] lg:h-[30vh] w-[45vh] min-h-[25vh] rounded-lg shadow-xl shadow-black/20 lg:-mr-[70%] -mr-0 -mb-[10%] -ml-[10%] lg:-ml-0 lg:-mt-0'>
        <div className='lg:h-[50%] h-[40%] p-[5%] '>
            <img className='h-full' src={cardLogo} alt="" />
        </div>
        <div className='h-[50%] w-full px-[10%] flex flex-col justify-center items-start gap-5 text-white'>
            <div>
                <span className='xl:text-xl sm:text-sm text-xs tracking-[.25rem] font-bold'>{cardNumber}</span>
            </div>
            <div className='w-full flex justify-between text-xs'>
                <div>
                    <span className='uppercase tracking-widest'>{cardName}</span>
                </div>
                <div>
                    <span className='tracking-widest'>{expMonth.toString().padStart(2, '0')}/{expYear.toString().padStart(2, '0')}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Recto;