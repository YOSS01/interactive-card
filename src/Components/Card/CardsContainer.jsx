import React from 'react';

// Components
import Recto from './Recto';
import Verso from './Verso';

function CardsContainer({cardNumber, cardName, expMonth, expYear, cvc}) {
  return (
    <div className='h-full w-[20%] flex flex-col justify-center gap-10'>
      <Recto cardNumber={cardNumber} cardName={cardName} expMonth={expMonth} expYear={expYear} />
      <Verso cvc={cvc} />
    </div>
  )
}
export default CardsContainer;