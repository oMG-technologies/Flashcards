import React from 'react';

export interface PropsTheBack {
  currentQuestion:
    | [
        {
          backCard: string;
          frontCard: string;
          id: number;
          pronunciation_backCard: string;
          pronunciation_frontCard: string;
          source_language: string;
          target_language: string;
        }
      ]
    | never[];
  flipButtonsOnCard: boolean;
  clickNextAndIKnow: () => any;
  clickNextAndIDonTKnow: () => any;
}

const TheBack: React.FC<PropsTheBack> = ({
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
          <span key={el.id}>
            <span key={el.id}>{el.backCard}</span>

            {flipButtonsOnCard ? (
              <audio
                className='audio-element'
                src={el.pronunciation_frontCard}
              ></audio>
            ) : (
              <audio
                className='audio-element'
                src={el.pronunciation_backCard}
              ></audio>
            )}
          </span>
        ))}
      </p>
      {flipButtonsOnCard ? (
        <div className='mainContainer_button'></div>
      ) : (
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
