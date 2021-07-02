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
  errors,
  isErrorValidation,
  setErrorValidation,
  languages,
  setArrOfAnswers,
}) => {
  const startTimerClick = () => {
    start();
    setAnswersGood(0);
    setAnswersBad(0);
    setErrorValidation(!isErrorValidation);
    setArrOfAnswers([]);
  };

  const onChangeEventChandlerAndCleanup = (e) => {
    setNumberElementInFlashCard(e.target.value);
  };

  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings:</div>

      <div className='ContainerDashboard_main'>
        {languages.map((language) =>
          getUnicodeFlagIcon(`${language.target_language}`)
        )}

        <div className='ContainerDashboard_main-selectLanguage'>
          <label style={{ margin: '15px' }}>Choose language:</label>

          <select
            className='ContainerDashboard_main-select'
            onChange={handleChangeSelectLanguage}
          >
            <option value=''>Language ...</option>
            {languages.map((language) => (
              <option key={language.id} value={language.conversion}>
                {language.name}
                {getUnicodeFlagIcon(`${language.target_language}`)}
              </option>
            ))}
          </select>
        </div>

        <span style={{ color: 'red', fontSize: '14px' }}>
          {errors.selectError}
        </span>
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
        {!isErrorValidation ? (
          <Link
            to='./FlashCard'
            onClick={startTimerClick}
            className='btn_toTheFlashCard'
          >
            Start
          </Link>
        ) : (
          <Link to='./' className='btn_toTheFlashCard'>
            Choses language and size to started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;