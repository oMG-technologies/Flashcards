import React, { useState, useContext } from 'react';
import TheFront from './TheFront';
import TheBack from './TheBack';

import { MainContext } from '../context/MainContext';

const FlashCard = () => {

  const questionsRandom = useContext(MainContext);

  const [flip, setFlip] = useState(false);

  const [curreatPage, setCurreatPage] = useState(1);
  const [questionsPerPage] = useState(1);

  // Get current post
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

  return (
      <div className='mainContainer'>
        <div className='mainContainer_text'>
          Mouse to the card to check answer:
        </div>
        <div className='mainContainer_result'>Result: </div>
        <div
          className={`theCard ${flip ? 'flip' : ''}`}
          onClick={() => setFlip(!flip)}
        >
          <TheFront currentQuestion = {currentQuestion}/>
          <TheBack currentQuestion = {currentQuestion}/>
        </div>
        <div className='mainContainer_button-next'>
          <button className='btn_Next' onClick={prevPage}>
            Prev
          </button>
          <button className='btn_Next' onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
  );
};

export default FlashCard;
