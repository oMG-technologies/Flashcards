import React from 'react';

const TheFront = ({
  currentQuestion,
  flipButtonsOnCard,
  clickNextAndIKnow,
  clickNextAndIDonTKnow,
}) => {
  return (
    <div className='theFront'>
      Front
      <p className='englishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>
            <span key={el.id}>{el.frontCard}</span>

            {flipButtonsOnCard ? (
              <audio
                className='audio-element'
                src={el.pronunciation_backCard}
              ></audio>
            ) : (
              <audio
                className='audio-element'
                src={el.pronunciation_frontCard}
              ></audio>
            )}
          </span>
        ))}
      </p>
      {flipButtonsOnCard ? (
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
      ) : (
        <div className='mainContainer_button'></div>
      )}
    </div>
  );
};

export default TheFront;
