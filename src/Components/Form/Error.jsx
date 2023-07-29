import React from 'react';

function Error({message}) {
  return (
    <div>
      <span className='text-xs' style={{color: 'hsl(0, 100%, 66%)'}}>{message}</span>
    </div>
  )
}
export default Error;