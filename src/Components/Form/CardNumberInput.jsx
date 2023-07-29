import React, { useId, useState } from 'react';

// Components
import Error from './Error';

function CardNumberInput({setCardNumber, setCardNumberValid}) {
  const id = useId();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleNumberInput = ({ target }) => {
    const inputNumber = target.value.replace(/ /g, '');
    const formattedNumber = inputNumber.match(/.{1,4}/g)?.join(' ');
    const pattern = /^[0-9\s]+$/;
    if(!formattedNumber){
      setMessage('Can\'t be blank');
      setError(true);
      setCardNumberValid(false);
    }else if(!pattern.test(formattedNumber)){
      setMessage('Wrong format, numbers only');
      setError(true);
      setCardNumberValid(false);
    }else if((target.value.length < 19 && target.value.length >= 1) || !validateCreditCardNumber(target.value)){
      setMessage('Card number not valid');
      setError(true);
      setCardNumberValid(false);
    }else{
      setError(false);
      setCardNumberValid(true);
    }
    setInputValue(formattedNumber || '');
    setCardNumber(formattedNumber || '0000 0000 0000 0000');
  };

  const validateCreditCardNumber = (CardNumber) => {
    // remove spaces or dashes from the card number
    CardNumber = CardNumber.replace(/[\s-]/g, '');

    // validating the credit card number according the Luhn algorithm
    let sum = 0;
    let doubleUp = false;

    for(var i=CardNumber.length-1; i>=0; i--){
      var digit = parseInt(CardNumber.charAt(i));
      if(doubleUp){
        if((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      doubleUp = !doubleUp;
    }
    return ((sum % 10) === 0);
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <label className="uppercase tracking-widest text-xs font-semibold" style={{color: 'hsl(278, 68%, 11%)'}} htmlFor={id}>Card Number</label>
      <input value={inputValue} onChange={handleNumberInput} className={`${error ? 'border-red-500' : 'border-slate-200'} border-[.5px] border-solid focus:border-violet-800 p-2 outline-none rounded-lg `} type="text" inputMode='numeric' maxLength='19' placeholder='e.g. 1234 5678 9123 0000' id={id} required />
      {
        error && (
          <Error message={message} />
        )
      }
    </div>
  )
}
export default CardNumberInput;