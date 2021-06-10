import React from 'react';

import { Link } from 'react-router-dom';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const Dashboard = ({
  handleChangeSelectLanguage,
  numberElementInFlashCard,
  setNumberElementInFlashCard,
  setAnswersBad,
  setAnswersGood,
  start,
}) => {
  const startTimerClick = () => {
    start();
    setAnswersGood(0);
    setAnswersBad(0);
  };

  const onChangeEventChandlerAndCleanup = (e) => {
    setNumberElementInFlashCard(e.target.value);
  };

  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings:</div>

      <div className='ContainerDashboard_main'>
        <div className='ContainerDashboard_main-selectLanguage'>
          <label style={{ margin: '15px' }}>Choose language:</label>
          {getUnicodeFlagIcon('PL')}
          {getUnicodeFlagIcon('DE')}
          {getUnicodeFlagIcon('FR')}
          {getUnicodeFlagIcon('ES')}
          {getUnicodeFlagIcon('RU')}
          {getUnicodeFlagIcon('IT')}
          {getUnicodeFlagIcon('SV')}
          {getUnicodeFlagIcon('CN')}
          <select
            className='ContainerDashboard_main-select'
            onChange={handleChangeSelectLanguage}
          >
            <option>Language ...</option>
            <option value='en-pl'>POLISH {getUnicodeFlagIcon('PL')}</option>
            <option value='en-de'>GERMAN {getUnicodeFlagIcon('DE')}</option>
            <option value='en-fr'>FRENCH {getUnicodeFlagIcon('FR')}</option>
            <option value='en-es'>SPANISH {getUnicodeFlagIcon('ES')}</option>
            <option value='en-ru'>RUSSIAN {getUnicodeFlagIcon('RU')}</option>
            <option value='en-it'>ITALIAN {getUnicodeFlagIcon('IT')}</option>
            <option value='en-sv'>LATVIAN {getUnicodeFlagIcon('SV')}</option>
            <option value='en-zh'>CHINESE {getUnicodeFlagIcon('CN')}</option>
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
            value={numberElementInFlashCard}
            onChange={onChangeEventChandlerAndCleanup}
            style={{ marginTop: '10px' }}
          />
          <div className='ContainerDashboard_main-rangeSlider-result'>
            {numberElementInFlashCard}
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
