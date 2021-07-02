import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const TheBack = ({ currentQuestion, nextPage }) => {
  const { IknowClick, IdontknowClick, arrOfAnswers } = useContext(MainContext);

  const clickNextAndIKnow = () => {
    nextPage();
    IknowClick();

    arrOfAnswers.push(true);
  };

  const clickNextAndIDonTKnow = () => {
    nextPage();
    IdontknowClick();
    arrOfAnswers.push(false);
  };

  return (
    <div className='theBack'>
      Back
      <p className='englishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.backCard}</span>
        ))}
      </p>
      <div className='mainContainer_button'>
        <button
          className='btn_IDonTknow-onCard'
          onClick={clickNextAndIDonTKnow}
        >
          I don't know
        </button>
        <button className='btn_Iknow-onCard' onClick={clickNextAndIKnow}>
          I know
        </button>
      </div>
    </div>
  );
};

export default TheBack;