import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ iknow, iDontknow }) => {
  // console.log('iknow in result', iknow)
  // console.log('iDontknow in result', iDontknow)
  return (
    <div className='ContainerResults'>
      <div className='ContainerResults_header'>Results</div>
      Results
      <div className='ContainerResults_button'>
        <Link to='./FlashCard' className = 'btn_toTheFlashCard'> The the FlashCard</Link>
        <Link to='.' className = 'btn_home' > Back home</Link>
      </div>
    </div>
  );
};

export default Results;
