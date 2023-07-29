import React from 'react';

function Verso({cvc}) {
  return (
    <div className='bgVerso lg:w-[55vh] lg:h-[30vh] w-[45vh] min-h-[25vh] rounded-lg text-white text-xs flex justify-end items-center px-16 shadow-xl shadow-black/20 lg:-mr-[100%] -mr-[5%] -mb-[10%] mt-10 sm:mt-5 lg:-mt-0'>
        <span className='tracking-widest'>{cvc.toString().padStart(3, '0')}</span>
    </div>
  )
}
export default Verso;