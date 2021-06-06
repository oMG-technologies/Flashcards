import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = ({
  handleChangeSelectLanguage,
  numerElemetInFlashCard,
  setNumerElemetInFlashCard,
  setAnswersBad,
  setAnswersGood,
  start,
}) => {
  const startTimerClick = () => {
    start();
    setAnswersGood(0);
    setAnswersBad(0);
  };

  const onchangeEventChandlerAndCleanup = (e) => {
    setNumerElemetInFlashCard(e.target.value);
  };


  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings:</div>

      <div className='ContainerDashboard_main'>
        <div className='ContainerDashboard_main-selectLanguage'>
          <label style={{ margin: '15px' }}>Choose language:</label>
          <select id='language' onChange={handleChangeSelectLanguage}>
            <option>Language ...</option>
            <option value='en-pl'>en-pl</option>
            <option value='en-de'>en-de</option>
            <option value='en-fr'>en-fr</option>
            <option value='en-es'>en-es</option>
            <option value='en-ru'>en-ru</option>
            <option value='en-it'>en-it</option>
            <option value='en-sv'>en-sv</option>
            <option value='en-zh'>en-zh</option>
          </select>
        </div>

        <div
          className='ContainerDashboard_main-rangeSlider'
          data-min='1'
          data-max='50'
        >
          <label style={{ margin: '15px' }}>Choose size of flip card:</label>
          <input
            type='range'
            min='1'
            max='50'
            value={numerElemetInFlashCard}
            onChange={onchangeEventChandlerAndCleanup}
            style={{ marginTop: '10px' }}
          />
          <div className='ContainerDashboard_main-rangeSlider-result'>
            {numerElemetInFlashCard}
          </div>
        </div>
      </div>

      <div className='ContainerDashboard_button'>
        <Link
          to='./FlashCard'
          onClick={startTimerClick}
          className='btn_toTheFlashCard'
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
