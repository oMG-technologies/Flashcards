import React from 'react'
import TheFront from './TheFront'
import TheBack from './TheBack'

const FlashCard = () => {
  return (
    <div className='mainContainer'>
      <div className='mainContainer_text'>Mouse to the card to check answer:</div>
      <div className='theCard'>

        <TheFront />
        <TheBack />
        
      </div>
    </div>
  );
};

export default FlashCard;
