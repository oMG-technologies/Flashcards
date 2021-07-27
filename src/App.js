import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './css/App.css';

import Login from './components/Login';
import Registration from './components/Registration';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import FlipCards from './components/FlipCards';
import Results from './components/Results';
import NotFound from './components/NotFound';

import { MainContext } from './context/MainContext';

import {
  getAllLanguages,
  getAllQuestionsByLanguage,
} from './services/ApiService';

import Loaded from './components/Loaded';
import Fix from './components/Fix';

function App() {
  // Loader
  const [isLoaded, setIsLoaded] = useState(true);

  // Log out in application
  const [isLogOut, setIsLogOut] = useState(false);

  // Pending
  const [isPending, setIsPending] = useState(true);

  const [questions, setQuestions] = useState([]);
  const [questionsRandom, setQuestionsRandom] = useState([]);

  const [languages, setLanguages] = useState([]);
  const [languageSetByUser, setLanguageSetByUser] = useState('');

  const [arrOfAnswers, setArrOfAnswers] = useState([]);
  const [answersGood, setAnswersGood] = useState(0);
  const [answersBad, setAnswersBad] = useState(0);

  const [numberElementInFlipCards, setNumberElementInFlipCards] = useState(10);

  const initialError = {
    selectError: '',
  };

  // Errors
  const [errors, setErrors] = useState(initialError);
  const [isErrorValidation, setErrorValidation] = useState(true);

  // Timer
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [intervalTime, setIntervalTime] = useState();

  // // Flip the cards
  const [flip, setFlip] = useState(false);
  const [flipButtonsOnCard, setFlipButtonsOnCard] = useState(false);

  const getQuestions = async (languageSetByUser) => {
    const dataQuestions = await getAllQuestionsByLanguage(languageSetByUser);

    if (dataQuestions === undefined || dataQuestions === []) {
      setIsPending(true);
    } else {
      setQuestions(dataQuestions);
      setIsLoaded(false);
      setIsPending(false);
    }
  };

  const getLanguages = async () => {
    const dataLanguages = await getAllLanguages();

    if (dataLanguages === undefined || dataLanguages === []) {
      setIsPending(true);
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

  // Create random questions
  useEffect(() => {
    randomQuestions();
  }, [questions, numberElementInFlipCards]);

  // Slice questions Arr
  const indexOfLastMainArrQuestion = numberElementInFlipCards;
  const indexOfFirstMainQuestion =
    indexOfLastMainArrQuestion - numberElementInFlipCards;
  const sliceArrQuestions = questions.slice(
    indexOfFirstMainQuestion,
    indexOfLastMainArrQuestion
  );

  const randomQuestions = () => {
    let newArrQuestions = [];

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

  // Create Result
  const IknowClick = () => {
    if (answersGood + answersBad < numberElementInFlipCards) {
      setAnswersGood(answersGood + 1);
    }
  };
  const IdontknowClick = () => {
    if (answersGood + answersBad < numberElementInFlipCards) {
      setAnswersBad(answersBad + 1);
    }
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

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

  const start = () => {
    run();
    setIntervalTime(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(intervalTime);
  };

  const reset = () => {
    clearInterval(intervalTime);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const validation = (selectedLanguage) => {
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

  const handleChangeSelectLanguage = (e) => {
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
    setIsLogOut(true);
  };

  if (isLogOut) {
    return <Redirect to='/' />;
  }

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
          // isSignOut: isSignOut,
        }}
      >
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/Registration' exact>
            <Registration />
          </Route>

          <ProtectedRoute path='/Dashboard'>
            <Route path='/Dashboard' exact>
              <Dashboard
                languages={languages}
                setLanguageSetByUser={setLanguageSetByUser}
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
          </ProtectedRoute>
          <Route path='/FlipCards' exact>
            <FlipCards />
          </Route>
          <Route path='/Results' exact>
            <Results />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
