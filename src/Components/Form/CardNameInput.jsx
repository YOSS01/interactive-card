import React, { useState, useId } from 'react';

// Component
import Error from './Error';

function PlaceHolderName({setCardName, setCardNameValid}) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const id = useId();

  const handleNameInput = ({target}) => {
    if(!target.value){
      setMessage('Can\'t be blank')
      setError(true);
      setCardNameValid(false);
    }else {
      setError(false);
      setCardNameValid(true);
    }
    setCardName(target.value? target.value : 'JANE APPLESSED');
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <label className="uppercase tracking-widest text-xs font-semibold" style={{color: 'hsl(278, 68%, 11%)'}} htmlFor={id}>Card Holder Name</label>
      <input onChange={handleNameInput} className={`${error ? 'border-red-500' : 'border-slate-200'} border-[.5px] border-solid focus:border-violet-800 p-2 outline-none rounded-lg `} type="text" placeholder='e.g. Jane Applessed' id={id} required/>
      {
        error && (
          <Error message={message} />
        )
      }
    </div>
  )
}
export default PlaceHolderName;