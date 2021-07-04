import React from 'react';

const TheBack = ({
  currentQuestion,
  flipButtonsOnCard,
  clickNextAndIKnow,
  clickNextAndIDonTKnow,
}) => {
  return (
    <div className='theBack'>
      Back
      <p className='englishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.backCard}</span>
        ))}
      </p>
      {flipButtonsOnCard ? null : (
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
      )}
    </div>
  );
};

export default TheBack;
