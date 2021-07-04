import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';

import Dashboard from './components/Dashboard';
import FlashCard from './components/FlashCard';
import Results from './components/Results';

import { MainContext } from './context/MainContext';

import {
  getAllLanguages,
  getAllQuestionsByLanguage,
} from './services/ApiService';

import Loaded from './components/Loaded';

function App() {
  // Loader
  const [isLoaded, setIsLoaded] = useState(true);

  const [questions, setQuestions] = useState([]);
  const [questionsRandom, setQuestionsRandom] = useState([]);

  const [languages, setLanguages] = useState([]);
  const [languageSetByUser, setLanguageSetByUser] = useState('');

  const [arrOfAnswers, setArrOfAnswers] = useState([]);
  const [answersGood, setAnswersGood] = useState(0);
  const [answersBad, setAnswersBad] = useState(0);

  const [numberElementInFlashCard, setNumberElementInFlashCard] = useState(10);

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
    setQuestions(dataQuestions);
    setIsLoaded(false);
  };

  const getLanguages = async () => {
    const dataLanguages = await getAllLanguages();
    setLanguages(dataLanguages);
    setIsLoaded(false);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    getQuestions(languageSetByUser);
    setAnswersGood(0);
    setAnswersBad(0);
  }, [languageSetByUser]);

  // Create random questions
  useEffect(() => {
    randomQuestions();
  }, [questions, numberElementInFlashCard]);

  // Slice questions Arr
  const indexOfLastMainArrQuestion = numberElementInFlashCard;
  const indexOfFirstMainQuestion =
    indexOfLastMainArrQuestion - numberElementInFlashCard;
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
    if (answersGood + answersBad < numberElementInFlashCard) {
      setAnswersGood(answersGood + 1);
    }
  };
  const IdontknowClick = () => {
    if (answersGood + answersBad < numberElementInFlashCard) {
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
          numberElementInFlashCard: numberElementInFlashCard,
          reset: reset,
          stop: stop,
          arrOfAnswers: arrOfAnswers,
          time: time,
          flip: flip,
          setFlip: setFlip,
          flipButtonsOnCard: flipButtonsOnCard,
          setFlipButtonsOnCard: setFlipButtonsOnCard,
        }}
      >
        <Switch>
          <Route path='/' exact>
            <Dashboard
              languages={languages}
              setLanguageSetByUser={setLanguageSetByUser}
              handleChangeSelectLanguage={handleChangeSelectLanguage}
              numberElementInFlashCard={numberElementInFlashCard}
              setNumberElementInFlashCard={setNumberElementInFlashCard}
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
          <Route path='/FlashCard' exact>
            <FlashCard />
          </Route>
          <Route path='/Results' exact>
            <Results />
          </Route>
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
