import React from 'react';

const TheFront = ({ currentQuestion }) => {

  return (
    <div className='theFront'>
      Front
      <p className='englishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.frontCard}</span>
        ))}
      </p>
    </div>
  );
};

export default TheFront;
