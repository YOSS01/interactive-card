import React from 'react';

// Components
import Recto from './Recto';
import Verso from './Verso';

function CardsContainer({cardNumber, cardName, expMonth, expYear, cvc}) {
  return (
    <div className='w-full h-full flex lg:flex-col flex-col-reverse justify-center items-center lg:gap-10'>
      <Recto cardNumber={cardNumber} cardName={cardName} expMonth={expMonth} expYear={expYear} />
      <Verso cvc={cvc} />
    </div>
  )
}
export default CardsContainer;