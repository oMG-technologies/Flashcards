import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './css/App.css';

import Login from './components/Login/Login';
import LoginEmailVerified from './components/LoginEmailVerified/LoginEmailVerified';
import Registration from './components/Registration/Registration';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import FlipCards from './components/FlipCards/FlipCards';
import Results from './components/Results/Results';
import NotFound from './components/NotFound/NotFound';

import { MainContext } from './context/MainContext';

import {
  getAllLanguages,
  getAllQuestionsByLanguage,
} from './services/ApiService';

import { removeUser } from './services/Authorization';

import Loaded from './components/Loaded/Loaded';
import Fix from './components/Fix/Fix';

const App: React.FC = () => {
  /**
   * Loaded
   */
  const [isLoaded, setIsLoaded] = useState(true);
  /**
   * Log out in application
   */
  const [isLogOut, setIsLogOut] = useState(false);

  /**
   * Pending
   */
  const [isPending, setIsPending] = useState(true);

  /**
   * Data questions in app
   */
  const [questions, setQuestions] = useState([]);
  const [questionsRandom, setQuestionsRandom] = useState([]);

  /**
   * Data languages in app
   */
  const [languages, setLanguages] = useState([]);
  const [languageSetByUser, setLanguageSetByUser] = useState('');

  /**
   * Amount flip cards
   */
  const [numberElementInFlipCards, setNumberElementInFlipCards] = useState(10);

  /**
   * Answers
   */
  const [arrOfAnswers, setArrOfAnswers] = useState([]);
  const [answersGood, setAnswersGood] = useState(0);
  const [answersBad, setAnswersBad] = useState(0);

  /**
   * Validation errors to start app
   */
  const initialError = {
    selectError: '',
  };
  const [errors, setErrors] = useState(initialError);
  const [isErrorValidation, setErrorValidation] = useState(true);

  /**
   * Timer app
   */
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [intervalTime, setIntervalTime] = useState<number>();

  /**
   * Switch the cards in app
   */
  const [flip, setFlip] = useState(false);
  const [flipButtonsOnCard, setFlipButtonsOnCard] = useState(false);

  /**
   * Get data question in app
   */

  const getQuestions = async (languageSetByUser: string): Promise<void> => {
    const dataQuestions = await getAllQuestionsByLanguage(languageSetByUser);

    if (dataQuestions === undefined || dataQuestions === []) {
      setIsPending(true);
      setIsLoaded(false);
    } else {
      setQuestions(dataQuestions);
      setIsLoaded(false);
      setIsPending(false);
    }
  };

  /**
   * Get data language in app
   */
  const getLanguages = async (): Promise<void> => {
    const dataLanguages = await getAllLanguages();

    if (dataLanguages === undefined || dataLanguages === []) {
      setIsPending(true);
      setIsLoaded(false);
    } else {
      setLanguages(dataLanguages);
      setIsLoaded(false);
      setIsPending(false);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    getQuestions(languageSetByUser);
    setAnswersGood(0);
    setAnswersBad(0);
  }, [languageSetByUser, flipButtonsOnCard]);

  /**
   * Create random questions
   */
  useEffect(() => {
    randomQuestions();
    // eslint-disable-next-line
  }, [questions, numberElementInFlipCards]);

  /**
   * Slice data questions
   */
  const indexOfLastMainArrQuestion: number = numberElementInFlipCards;
  const indexOfFirstMainQuestion: number =
    indexOfLastMainArrQuestion - numberElementInFlipCards;
  const sliceArrQuestions: never[] = questions.slice(
    indexOfFirstMainQuestion,
    indexOfLastMainArrQuestion
  );

  /**
   * Create random questions
   */
  const randomQuestions = (): void => {
    let newArrQuestions: [] = [];

    let lengthSliceArrQuestions = sliceArrQuestions.length;
    let numberOfIndexOfSliceQuestion = 0;

    while (lengthSliceArrQuestions--) {
      numberOfIndexOfSliceQuestion = Math.floor(
        Math.random() * (lengthSliceArrQuestions + 1)
      );
      newArrQuestions.push(sliceArrQuestions[numberOfIndexOfSliceQuestion]);
      sliceArrQuestions.splice(numberOfIndexOfSliceQuestion, 1);
    }
    return setQuestionsRandom(newArrQuestions);
  };

  /**
   * Create Result
   */
  const IknowClick = (): void => {
    if (answersGood + answersBad < numberElementInFlipCards) {
      setAnswersGood(answersGood + 1);
    }
  };
  const IdontknowClick = (): void => {
    if (answersGood + answersBad < numberElementInFlipCards) {
      setAnswersBad(answersBad + 1);
    }
  };

  let updatedMs: number = time.ms,
    updatedS: number = time.s,
    updatedM: number = time.m,
    updatedH: number = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const start = (): void => {
    run();
    const interval = window.setInterval(() => run(), 10);
    setIntervalTime(interval);
  };

  const stop = (): void => {
    clearInterval(intervalTime);
  };

  const reset = (): void => {
    clearInterval(intervalTime);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const validation = (selectedLanguage: string) => {
    let selectError = '';

    if (selectedLanguage === '') {
      selectError = 'Please choose language';

      setLanguageSetByUser(selectedLanguage);
      setErrorValidation(true);
    } else {
      selectError = '';

      setLanguageSetByUser(selectedLanguage);
      setErrorValidation(false);
    }

    if (selectError) {
      setErrors({ selectError });

      return false;
    } else {
      setErrors({ selectError });

      return true;
    }
  };

  const handleChangeSelectLanguage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedLanguage = e.target.value;

    setLanguageSetByUser(selectedLanguage);

    validation(selectedLanguage);
  };

  if (isLoaded) {
    return <Loaded />;
  } else if (isPending) {
    return <Fix />;
  }

  const isSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLogOut(!isLogOut);

    if (isLogOut) {
      return <Redirect to='/' />;
    }
  };

  const removeUserFromApplication = (): void => {
    removeUser();
    isSignOut();
  };

  return (
    <Router>
      <MainContext.Provider
        value={{
          questionsRandom: questionsRandom,
          answersGood: answersGood,
          answersBad: answersBad,
          IdontknowClick: IdontknowClick,
          IknowClick: IknowClick,
          numberElementInFlipCards: numberElementInFlipCards,
          reset: reset,
          stop: stop,
          arrOfAnswers: arrOfAnswers,
          time: time,
          flip: flip,
          setFlip: setFlip,
          flipButtonsOnCard: flipButtonsOnCard,
          setFlipButtonsOnCard: setFlipButtonsOnCard,
          isSignOut: isSignOut,
          removeUserFromApplication: removeUserFromApplication,
        }}
      >
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/LoginEmailVerified' exact>
            <LoginEmailVerified />
          </Route>
          <Route path='/Registration' exact>
            <Registration />
          </Route>

          <ProtectedRoute>
            <Route exact path='/Dashboard'>
              <Dashboard
                languages={languages}
                handleChangeSelectLanguage={handleChangeSelectLanguage}
                numberElementInFlipCards={numberElementInFlipCards}
                setNumberElementInFlipCards={setNumberElementInFlipCards}
                setAnswersGood={setAnswersGood}
                setAnswersBad={setAnswersBad}
                start={start}
                reset={reset}
                errors={errors}
                isErrorValidation={isErrorValidation}
                setErrorValidation={setErrorValidation}
                setArrOfAnswers={setArrOfAnswers}
              />
            </Route>
            <Route exact path='/FlipCards'>
              <FlipCards />
            </Route>
            <Route exact path='/Results'>
              <Results />
            </Route>
          </ProtectedRoute>

          <Route component={NotFound} />
        </Switch>
      </MainContext.Provider>
    </Router>
  );
};

export default App;
