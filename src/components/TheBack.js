import React, { useState } from 'react';
import Results from './Results';

const TheBack = ({ currentQuestion }) => {
  const [iknow, setIknow] = useState(0);
  const [iDontknow, setIDontknow] = useState(0);

  const IknowClick = () => {
    setIknow(iknow + 1);
  };

  const IDontknowClick = () => {
    setIDontknow(iDontknow + 1);
  };

  return (
    <div className='theBack'>
      Back
      <p className='eanglishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.backCard}</span>
        ))}
      </p>
      <div className='mainContainer_button'>
        <button className='btn_IDonTknow' onClick={IDontknowClick}>
          I don't know
        </button>
        <button className='btn_Iknow' onClick={IknowClick}>
          I know
        </button>
      </div>
      <Results iknow={iknow} iDontknow={iDontknow} />
    </div>
  );
};

export default TheBack;
