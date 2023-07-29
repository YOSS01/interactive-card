import React from 'react';

function Verso({cvc}) {
  return (
    <div className='bgVerso w-[55vh] h-[30vh] bg-blue-50 rounded-lg -ml-[70%] text-white text-xs flex justify-end items-center px-10'>
        <span className='tracking-widest'>{cvc.toString().padStart(3, '0')}</span>
    </div>
  )
}
export default Verso;