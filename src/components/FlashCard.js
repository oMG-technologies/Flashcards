import React from 'react';
import TheFront from './TheFront';
import TheBack from './TheBack';

const FlashCard = () => {
  return (
    <div className='mainContainer'>
        <div className='mainContainer_text'>
          Mouse to the card to check answer:
        </div>
      <div className='mainContainer_result'>Result: </div>
        <div className='theCard'>
          <TheFront />
          <TheBack />
        </div>
      <div className='mainContainer_button-next'>
        
        <button className='btn_Next'>Next </button>

      </div>
    </div>
  );
};

export default FlashCard;
