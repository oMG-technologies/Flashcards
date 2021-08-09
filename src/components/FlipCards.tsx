import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import TheFront from './TheFront';
import TheBack from './TheBack';

import { MainContext } from '../context/MainContext';

const FlipCards: React.FC = () => {
  const {
    questionsRandom,
    numberElementInFlipCards,
    IknowClick,
    IdontknowClick,
    arrOfAnswers,
    stop,
    reset,
    flipButtonsOnCard,
    flip,
    setFlip,
  } = useContext(MainContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);

  /**
   * Created single question
   */
  const indexOfLastQuestion: number = currentPage * questionsPerPage;
  const indexOfFirstQuestion: number = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questionsRandom.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  /**
   * Changed Page
   */
  const nextPage = (): void => {
    if (currentPage < questionsRandom.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resultTime = (): void => {
    stop();
  };

  const backHome = (): void => {
    reset();
  };

  /**
   * Result and change flip card
   */
  const clickNextAndIKnow = (): void => {
    nextPage();
    IknowClick();

    if (arrOfAnswers.length < numberElementInFlipCards) {
      arrOfAnswers.push(true);
    }
  };

  const clickNextAndIDonTKnow = (): void => {
    nextPage();
    IdontknowClick();

    if (arrOfAnswers.length < numberElementInFlipCards) {
      arrOfAnswers.push(false);
    }
  };

  /**
   * Pronunciation
   */
  const playAudio = (i: number): void => {
    let audioEl: any = document.getElementsByClassName('audio-element')[i];
    audioEl.play();
  };

  return (
    <div className='mainContainer'>
      <div className='mainContainer_text'>
        Click on the card to check the answer
      </div>
      <div className='mainContainer_question'>
        Question: {currentPage} / {numberElementInFlipCards}
      </div>
      <div
        className={`theCard ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <TheFront
          currentQuestion={currentQuestion}
          flipButtonsOnCard={flipButtonsOnCard}
          clickNextAndIKnow={clickNextAndIKnow}
          clickNextAndIDonTKnow={clickNextAndIDonTKnow}
        />
        <TheBack
          currentQuestion={currentQuestion}
          flipButtonsOnCard={flipButtonsOnCard}
          clickNextAndIKnow={clickNextAndIKnow}
          clickNextAndIDonTKnow={clickNextAndIDonTKnow}
        />
      </div>

      <div className='mainContainer_boxIcon'>
        {arrOfAnswers.map((answer: boolean, i: number) =>
          answer ? (
            <span className='mainContainer_boxIcon-check' key={i}>
              <i className='fa fa-check'></i>
            </span>
          ) : (
            <span className='mainContainer_boxIcon-remove' key={i}>
              <i className='fa fa-remove'></i>
            </span>
          )
        )}
      </div>

      <div className='mainContainer_button-next-prev'>
        <button className='btn_prevPage' onClick={prevPage}>
          Previous
        </button>

        {flipButtonsOnCard ? (
          <button
            className={flip ? 'btnBack ' : 'btnFront'}
            onClick={!flip ? () => playAudio(1) : () => playAudio(0)}
          >
            <span>
              <i className='fa fa-volume-up'></i>
            </span>
          </button>
        ) : (
          <button
            className={flip ? 'btnBack ' : 'btnFront'}
            onClick={flip ? () => playAudio(1) : () => playAudio(0)}
          >
            <span>
              <i className='fa fa-volume-up'></i>
            </span>
          </button>
        )}

        <button className='btn_nextPage' onClick={nextPage}>
          Next
        </button>
      </div>

      <div className='mainContainer_button-back-results'>
        <Link to='./dashboard' onClick={backHome} className='btn_home'>
          Back home
        </Link>
        <Link to='./Results' onClick={resultTime} className='btn_results'>
          Your Result
        </Link>
      </div>
    </div>
  );
};

export default FlipCards;
