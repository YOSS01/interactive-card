import React from 'react';

// Pictures
import cardLogo from '../../images/card-logo.svg';

function Recto({cardNumber, cardName, expMonth, expYear}) {

  return (
    <div className='bgRecto w-[55vh] h-[30vh] rounded-lg -ml-[90%]'>
        <div className='h-[50%] p-[5%] '>
            <img src={cardLogo} alt="" />
        </div>
        <div className='h-[50%] w-full px-[10%] flex flex-col justify-center items-start gap-5 text-white'>
            <div>
                <span className='text-xl tracking-[.25rem] font-bold'>{cardNumber}</span>
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