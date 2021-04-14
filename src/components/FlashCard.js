import React from 'react'
import TheFront from './TheFront'
import TheBack from './TheBack'
import {useSelector, useDispatch} from 'react-redux';
import { incrament,decrament } from '../redux/actions';

const FlashCard = () => {

  const state = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

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
         <div className = 'mainContainer_button'>
            <button className = 'btn_Iknow' onClick = {() => dispatch(incrament())}>I know</button>
            <button className = 'btn_IDonTknow' onClick = {() => dispatch(decrament())}>I don't know</button>
        </div>
      
    </div>
  );
};

export default FlashCard;
