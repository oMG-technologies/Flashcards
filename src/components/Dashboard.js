import React, { useContext } from 'react';

import { MainContext } from '../context/MainContext';

import { Link } from 'react-router-dom';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const Dashboard = ({
  handleChangeSelectLanguage,
  numberElementInFlashCard,
  setNumberElementInFlashCard,
  setAnswersBad,
  setAnswersGood,
  start,
  reset,
  errors,
  isErrorValidation,
  setErrorValidation,
  languages,
  setArrOfAnswers,
}) => {
  const { flip, setFlip, flipButtonsOnCard, setFlipButtonsOnCard } =
    useContext(MainContext);

  const startTimerClick = () => {
    reset();
    start();
    setAnswersGood(0);
    setAnswersBad(0);
    setErrorValidation(!isErrorValidation);
    setArrOfAnswers([]);
  };

  const onChangeEventChandlerAndCleanup = (e) => {
    setNumberElementInFlashCard(e.target.value);
  };

  const changedFrontBack = () => {
    setFlip(!flip);
    setFlipButtonsOnCard(!flipButtonsOnCard);
  };

  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings:</div>

      <div className='ContainerDashboard_main'>
        {languages.map((language) =>
          getUnicodeFlagIcon(`${language.target_language_iso3166}`)
        )}

        <div className='ContainerDashboard_main-selectLanguage'>
          <label style={{ margin: '15px' }}>Choose language</label>

          <select
            className='ContainerDashboard_main-select'
            onChange={handleChangeSelectLanguage}
          >
            <option value=''>None</option>
            {languages.map((language) => (
              <option key={language.id} value={language.conversion}>
                {language.name}
                {getUnicodeFlagIcon(`${language.target_language_iso3166}`)}
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
          <label style={{ margin: '15px' }}>Set number of flip cards</label>
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
        
        <div className='ContainerDashboard_main-chooseSide'>
          <label style={{ margin: '25px' }}>Choose side of cards:</label>
          <button
            className={`${flip ? 'btnBack' : 'btnFront'}`}
            onClick={changedFrontBack}
          >
            {`${flip ? 'Back Card' : 'Front Card'}`}
          </button>
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
            Choose language, number of flip cards and side to start
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
