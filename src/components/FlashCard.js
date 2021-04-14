import React from 'react'
import TheFront from './TheFront'
import TheBack from './TheBack'
import {useSelector} from 'react-redux';


const FlashCard = () => {

  const state = useSelector(state => state.counterReducer)

  return (
    <div className='mainContainer'>
      <div className='mainContainer_text'>Mouse to the card to check answer:</div>
      <div className='mainContainer_result'>
        Result: {state}

      </div>
      <div className='theCard'>
        <TheFront />
        <TheBack />
      </div>

    </div>
  );
};

export default FlashCard;
