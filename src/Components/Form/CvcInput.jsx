import React, { useState, useId } from 'react';

// Components
import Error from './Error';

function CvcInput({setCvc, setCvcValid}) {
  const id = useId();
  const [cvcInput, setCvcInput] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleCvcInput = ({target}) => {
    const input = target.value;
    const truncatedCvc = input.slice(0, 3);
    const numericPattern = /[-+]/;
    if(!truncatedCvc){
      setMessage('Cant\'t be blank');
      setError(true);
      setCvcValid(false);
    }else if(numericPattern.test(truncatedCvc)){
      setMessage('Wrong format, numbers only');
      setError(true);
      setCvcValid(false);
    }else if(target.value.length >= 1 && target.value.length < 3){
      setMessage('Card\'s security code is not complete');
      setError(true);
      setCvcValid(false);
    }else {
      setError(false);
      setCvcValid(true);
    }
    setCvcInput(truncatedCvc);
    setCvc(truncatedCvc ? truncatedCvc : '000');
  }

  return (
    <div className='w-[40%] flex flex-col gap-2'>
      <label className="uppercase tracking-widest text-xs font-semibold" style={{color: 'hsl(278, 68%, 11%)'}} htmlFor={id}>cvc</label>
      <input value={cvcInput} onChange={handleCvcInput} className={`numberInput ${error ? 'border-red-500' : 'border-slate-200'} border-[.5px] border-solid focus:border-violet-800 p-2 outline-none rounded-lg `} type="number" min='0' inputMode='numeric' placeholder='e.g. 123' id={id} required />
      {
        error && (
          <Error message={message} />
        )
      }
    </div>
  )
}
export default CvcInput;