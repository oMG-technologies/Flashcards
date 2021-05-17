import React, { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const TheBack = ({ currentQuestion, nextPage }) => {
  const { IknowClick, IDontknowClick } = useContext(MainContext);

  // const [iknow, setIknow] = useState(0);
  // const [iDontknow, setIDontknow] = useState(0);

  // const IknowClick = () => {
  //   setIknow(iknow + 1);
  // };

  // const IDontknowClick = () => {
  //   setIDontknow(iDontknow + 1);
  // };
  const henadleClick = () => {
    IknowClick() 
    nextPage()
  }

  return (
    <div className='theBack'>
      Back
      <p className='eanglishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.backCard}</span>
        ))}
      </p>
      <div className='mainContainer_button'>
        <button className='btn_IDonTknow-onCard' onClick={IDontknowClick}>
          I don't know
        </button>
        <button className='btn_Iknow-onCard' onClick={henadleClick}>
          I know
        </button>
      </div>
      {/* <Results iknow={iknow} iDontknow={iDontknow} /> */}
    </div>
  );
};

export default TheBack;
