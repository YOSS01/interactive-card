import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import CardNameInput from './CardNameInput';
import ExpDateInput from './ExpDateInput';
import CardNumberInput from './CardNumberInput';
import CvcInput from './CvcInput';
import Submit from './Submit';

// React icons
import {VscError} from 'react-icons/vsc';

function Form({setCardNumber, setCardName, setExpMonth, setExpYear, setCvc}) {
  const [cardNameValid, setCardNameValid] = useState(false);
  const [cardNumberValid, setCardNumberValid] = useState(false);
  const [expMonthValid, setExpMonthValid] = useState(false);
  const [expYearValid, setExpYearValid] = useState(false);
  const [cvcValid, setCvcValid] = useState(false);

  const [notValid, setNotValid] = useState(false);


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = cardNameValid && cardNumberValid && expMonthValid && expYearValid && cvcValid;
    if(isValid){
      navigate('/interactive-card/Complete/');
    }else {
      setNotValid(true);
      setTimeout(()=>{
        setNotValid(false);
      }, 5000);
    }
  }

  return (
    <div className='w-[45%] h-full flex items-center relative'>
      <form className='w-[50%] flex flex-col gap-5' action="" onSubmit={handleSubmit}>
        <CardNameInput setCardName={setCardName} setCardNameValid={setCardNameValid} />
        <CardNumberInput setCardNumber={setCardNumber} setCardNumberValid={setCardNumberValid} />
        <div className='w-full flex justify-between gap-2'>
          <ExpDateInput setExpMonth={setExpMonth} setExpYear={setExpYear} setExpMonthValid={setExpMonthValid} setExpYearValid={setExpYearValid} />
          <CvcInput setCvc={setCvc} setCvcValid={setCvcValid} />
        </div>
        <Submit />
      </form>
      {
        notValid && (
          <div className="absolute bottom-5 right-5 flex items-center gap-2 shadow-slate-400 shadow-xl p-4">
            <VscError className='text-red-500 text-xl' />
            <span className="text-sm text-slate-500">One of the fields not properly filled</span>
          </div>
        )
      }
    </div>
  )
}
export default Form;