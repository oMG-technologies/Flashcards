import React, {useContext} from 'react';
import { MainContext } from '../context/MainContext';

const TheFront = () => {

  const currentQuestion = useContext(MainContext)
  console.log('singleQuestion the front',currentQuestion)


  return (
    <div className='theFront'>
      Front
      <p className='eanglishMeaning'>
        {currentQuestion.map(el => <span key = {el.id}>{el.frontCard}</span>)}
      </p>
    </div>
  );
};

export default TheFront;
