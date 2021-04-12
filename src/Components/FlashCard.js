import React from 'react';

const FlashCard = () => {
  return (
    <div className='mainContainer'>
      <p className='mainContainer_text'>Mouse to the card to check answer:</p>
      <div className='theCard'>
        <div className='theFront'>Front</div>
        <div className='theBack'>Back</div>
      </div>
    </div>
  );
};

export default FlashCard;
