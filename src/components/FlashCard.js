import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import TheFront from './TheFront';
import TheBack from './TheBack';

import { MainContext } from '../context/MainContext';

const FlashCard = () => {

  const questionsRandom = useContext(MainContext);

  const [flip, setFlip] = useState(false);

  const [iknow, setIknow] = useState(0);
  const [iDontknow, setIDontknow] = useState(0);

  const [curreatPage, setCurreatPage] = useState(1);
  const [questionsPerPage] = useState(1);

  // Get current Question
  const indexOfLastQuestion = curreatPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questionsRandom.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Create Result
  const IknowClick = () => {
    setIknow(iknow + 1);
  };

  const IDontknowClick = () => {
    setIDontknow(iDontknow + 1);
  };

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

  return (
    <div className='mainContainer'>
      <div className='mainContainer_text'>
        Click to the card to check the answer:
      </div>
      <div className='mainContainer_result'>
        Result: {iknow} / {iDontknow}
      </div>
      <div
        className={`theCard ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <TheFront currentQuestion={currentQuestion} />
        <TheBack currentQuestion={currentQuestion} />
      </div>
      <div className='mainContainer_button-next'>
        <button className='btn_prevPage' onClick={prevPage}>
          Prev
        </button>
        <button className='btn_IDonTknow' onClick={IDontknowClick}>
          I don't know
        </button>
        <button className='btn_Iknow' onClick={IknowClick}>
          I know
        </button>
        <button className='btn_Next' onClick={nextPage}>
          Next
        </button>
      </div>
      <Link to='.'> Back home</Link>
      <Link to='./Results'> Results</Link>
    </div>
  );
};

export default FlashCard;
