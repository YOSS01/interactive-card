import React from 'react';

// Components
import CardsContainer from './Card/CardsContainer';

function CardContainerMain({cardNumber, cardName, expMonth, expYear, cvc}) {
  return (
    <div className='lg:heroBgDesktop heroBgMobile lg:h-full h-[35%] lg:w-[30%] w-full'>
      <CardsContainer cardNumber={cardNumber} cardName={cardName} expMonth={expMonth} expYear={expYear} cvc={cvc}  />
    </div>
  )
}
export default CardContainerMain;