import React, {
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

import { MainContext } from '../../context/MainContext';

import { Link } from 'react-router-dom';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import { InitialError } from '../../App';
type IntrinsicAttributes = /*unresolved*/ any;

interface IDashboardProps {
  handleChangeSelectLanguage: (
    arg: IntrinsicAttributes & IDashboardProps & { children?: ReactNode }
  ) => void;
  numberElementInFlipCards: number;
  setNumberElementInFlipCards: (
    arg: IntrinsicAttributes & IDashboardProps & { children?: ReactNode }
  ) => void;
  setAnswersBad: (arg: number) => void;
  setAnswersGood: (arg: number) => void;
  start: () => void;
  reset: () => void;
  errors: InitialError;
  isErrorValidation: boolean;
  setErrorValidation: (arg: boolean) => void;
  languages:
    | [
        {
          id: number;
          conversion: string;
          target_language_iso639: string;
          target_language_iso3166: string;
          name: string;
        }
      ]
    | never[];
  setArrOfAnswers: Dispatch<SetStateAction<never[]>>;
}

const Dashboard: React.FC<IDashboardProps> = ({
  handleChangeSelectLanguage,
  numberElementInFlipCards,
  setNumberElementInFlipCards,
  setAnswersBad,
  setAnswersGood,
  start,
  reset,
  errors,
  isErrorValidation,
  setErrorValidation,
  languages,
  setArrOfAnswers,
}): JSX.Element => {
  const {
    flip,
    setFlip,
    flipButtonsOnCard,
    setFlipButtonsOnCard,
    removeUserFromApplication,
  } = useContext(MainContext);

  useEffect(() => {
    setFlip(false);
    setFlipButtonsOnCard(false);
    // eslint-disable-next-line
  }, []);

  /**
   * Start using application
   */
  const startTimerClick = (): void => {
    reset();
    start();
    setAnswersGood(0);
    setAnswersBad(0);
    setErrorValidation(!isErrorValidation);
    setArrOfAnswers([]);
  };

  /**
   * Change language
   */
  const onChangeEventChandlerAndCleanup = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNumberElementInFlipCards(e.target.value);
  };

  /**
   * Change side flip cards
   */
  const changedFrontBack = (): void => {
    setFlip(!flip);
    setFlipButtonsOnCard(!flipButtonsOnCard);
  };

  /**
   * Save user to local storage
   */
  const savedUserFromLocalStorage: string | null = localStorage.getItem('user');

  return (
    <div className='ContainerDashboard'>
      <div className='ContainerDashboard_header'>Settings</div>

      <div className='ContainerDashboard_main'>
        {languages.map((language) =>
          getUnicodeFlagIcon(`${language.target_language_iso3166}`)
        )}
        <div className='ContainerDashboard_main-welcomeUser'>
          <span style={{ fontSize: '22px' }}>
            Welcome{' '}
            <span style={{ color: 'orange' }}>{savedUserFromLocalStorage}</span>
            ! Nice to see you!
          </span>
        </div>

        <div className='ContainerDashboard_main-removeUser'>
          <span onClick={removeUserFromApplication}>
            Remove me
            <i className='fa fa-times' style={{ color: 'red' }}></i>
          </span>
        </div>
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
            value={numberElementInFlipCards}
            onChange={onChangeEventChandlerAndCleanup}
            style={{ marginTop: '10px' }}
          />
          <div className='ContainerDashboard_main-rangeSlider-result'>
            {numberElementInFlipCards}
          </div>
        </div>
        <div className='ContainerDashboard_main-chooseSide'>
          <label style={{ margin: '25px' }}>Choose side of cards</label>
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
            to='/FlipCards'
            onClick={startTimerClick}
            className='btn_toTheFlipCard'
          >
            Start
          </Link>
        ) : (
          <button className='btn_toTheFlipCard'>
            Choose language, number of flip cards and side to start
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
