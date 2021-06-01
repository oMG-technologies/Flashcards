import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import TheFront from './TheFront';
import TheBack from './TheBack';

import { MainContext } from '../context/MainContext';

const FlashCard = () => {
  const { questionsRandom, numerElemetInFlashCard, stop } = useContext(MainContext);

  const [flip, setFlip] = useState(false);

  const [curreatPage, setCurreatPage] = useState(1);
  const [questionsPerPage] = useState(1);

  // Get current Question
  const indexOfLastQuestion = curreatPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questionsRandom.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Changed Page
  const nextPage = () => {
    if (curreatPage < questionsRandom.length) {
      setCurreatPage(curreatPage + 1);
    }
  };

  const prevPage = () => {
    if (curreatPage > 1) {
      setCurreatPage(curreatPage - 1);
    }
  };

  const resultTime = () => {
    stop();
  };

  return (
    <div className='mainContainer'>
      <div className='mainContainer_text'>
        Move to the card to check the answer:
      </div>
      <div className='mainContainer_question'>
        Question: {curreatPage} / {numerElemetInFlashCard}
      </div>
      <div
        className={`theCard ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <TheFront currentQuestion={currentQuestion} />
        <TheBack currentQuestion={currentQuestion} nextPage={nextPage} />
      </div>
      <div className='mainContainer_button-next-prev'>
        <button className='btn_prevPage' onClick={prevPage}>
          Prev
        </button>
        <button className='btn_Next' onClick={nextPage}>
          Next
        </button>
      </div>
      <div className='mainContainer_button-back-results'>
        <Link to='./' className='btn_home'>
          Back home
        </Link>
        <Link to='./Results' onClick={resultTime} className='btn_results'>
          Results
        </Link>
      </div>
    </div>
  );
};

export default FlashCard;