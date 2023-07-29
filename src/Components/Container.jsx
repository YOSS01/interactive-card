import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Bg from './Bg';
import CardsContainer from './Card/CardsContainer';
import Form from './Form/Form';
import Complete from './Form/Complete';

function Container() {
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [cardName, setCardName] = useState('Jane applessed');
    const [expMonth, setExpMonth] = useState('00');
    const [expYear, setExpYear] = useState('00');
    const [cvc, setCvc] = useState('000');

  return (
    <BrowserRouter>
      <div className='w-full h-full flex flex-row'>
          <Bg />
          <CardsContainer cardNumber={cardNumber} cardName={cardName} expMonth={expMonth} expYear={expYear} cvc={cvc} />
          <Routes>
            <Route path='interactive-card/' element={<Form setCardNumber={setCardNumber} setCardName={setCardName} setExpMonth={setExpMonth} setExpYear={setExpYear} setCvc={setCvc} />} />
            <Route path='interactive-card/Complete/' element={<Complete />} />
          </Routes>
      </div>
    </BrowserRouter>
    
  )
}
export default Container;