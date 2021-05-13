import React from 'react';

const TheBack = ({ currentQuestion }) => {
  return (
    <div className='theBack'>
      Back
      <p className='eanglishMeaning'>
        {currentQuestion.map((el) => (
          <span key={el.id}>{el.backCard}</span>
        ))}
      </p>
      <div className='mainContainer_button'>
        <button className='btn_Iknow'>I know</button>
        <button className='btn_IDonTknow'>I don't know</button>
      </div>
    </div>
  );
};

export default TheBack;
