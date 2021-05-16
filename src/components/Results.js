import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ iknow, iDontknow }) => {
  // console.log('iknow in result', iknow)
  // console.log('iDontknow in result', iDontknow)
  return (
    <div className='Container'>
      <div className='Container_header'>Results</div>
      Results
      <div className='Container_button'>
        <Link to='.'> Back home</Link>
        <Link to='./FlashCard'> The the FlashCard</Link>
      </div>
    </div>
  );
};

export default Results;
