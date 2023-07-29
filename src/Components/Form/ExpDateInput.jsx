import React, { useState, useId } from 'react';

// Components 
import Error from './Error';

function ExpDateInput({setExpMonth, setExpYear, setExpMonthValid, setExpYearValid}) {
  const id = useId();
  const [errorMM, setErrorMM] = useState(false);
  const [errorYY, setErrorYY] = useState(false);
  const [messageMM, setMessageMM] = useState('');
  const [messageYY, setMessageYY] = useState('');
  const [mm, setMM] = useState('');
  const [yy, setYY] = useState('');

  const handleExpMonthInput = ({target}) => {
    const input = target.value;
    const v = input.slice(0,2);
    if(!v){
      setMessageMM('Can\'t be blank');
      setErrorMM(true);
      setExpMonthValid(false);
    }else if(input < 1 || input > 12){
      setMessageMM('Logic error');
      setErrorMM(true);
      setExpMonthValid(false);
    }else {
      setErrorMM(false);
      setExpMonthValid(true);
    };
    setMM(v);
    setExpMonth(v? v : '00');
  }

  const handleExpYearInput = ({target}) => {
    const input = target.value;
    const v = input.slice(0,2);
    const date = new Date();
    const lastTwoNumbers = date.getYear() % 100;
    if(!v){
      setMessageYY('Can\'t be blank');
      setErrorYY(true);
      setExpYearValid(false);
    }else if((input < lastTwoNumbers) || (input > (lastTwoNumbers+10)) || (input < 0)){
      setMessageYY('Logic error');
      setErrorYY(true);
      setExpYearValid(false);
    }else {
      setErrorYY(false);
      setExpYearValid(true);
    };
    setYY(v);
    setExpYear(v? v : '00');
  }

  return (
    <div className='w-[55%] flex flex-col gap-2'>
      <label className="uppercase tracking-widest text-xs font-semibold" style={{color: 'hsl(278, 68%, 11%)'}} htmlFor={`${id}-mm`}>Exp. date (<label htmlFor={`${id}-mm`}>MM</label>/<label htmlFor={`${id}-yy`}>YY</label>)</label>
      <div className='w-full flex justify-between gap-1'>
        <input value={mm} onChange={handleExpMonthInput} className={`numberInput w-[50%] ${errorMM ? 'border-red-500' : 'border-slate-200'} border-[.5px] border-solid focus:border-violet-800 p-2 outline-none rounded-lg `} type="number" inputMode='numeric' placeholder='MM' id={`${id}-mm`} required />
        <input value={yy} onChange={handleExpYearInput} className={`numberInput w-[50%] ${errorYY ? 'border-red-500' : 'border-slate-200'} border-[.5px] border-solid focus:border-violet-800 p-2 outline-none rounded-lg `} type="number" inputMode='numeric' placeholder='YY' id={`${id}-yy`} required />
      </div>
      {
        errorMM && (
          <Error message={messageMM} />
        )
      }
      {
        errorYY && (
          <Error message={messageYY} />
        )
      }
    </div>
  )
}
export default ExpDateInput;