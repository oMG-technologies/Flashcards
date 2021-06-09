import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

import './css/App.css';

import Dashboard from './components/Dashboard';
import FlashCard from './components/FlashCard';
import Results from './components/Results';

import { MainContext } from './context/MainContext';

import { getAllQuestionsByLanguage } from './services/ApiService';

function App() {

  const [questions, setQuestions] = useState([]);
  const [languages, setLanguages] = useState('');

  const [answersGood, setAnswersGood] = useState(0);
  const [answersBad, setAnswersBad] = useState(0);

  const [numberElementInFlashCard, setNumberElementInFlashCard] = useState(10);

  // Timer
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState();

  const getQuestions = async (languages) => {
    const dataQuestions = await getAllQuestionsByLanguage(languages);
    setQuestions(dataQuestions);
  };


  useEffect(() => {
    getQuestions(languages);
    setAnswersGood(0);
    setAnswersBad(0);
  }, [languages]);

  // Slice questions Arr
  const indexOfLastMainArrQuestion = numberElementInFlashCard;
  const indexOfFirstMainQuestion =
    indexOfLastMainArrQuestion - numberElementInFlashCard;
  const sliceArrQuestions = questions.slice(
    indexOfFirstMainQuestion,
    indexOfLastMainArrQuestion
  );

  const randomQuestion = () => {
    let newArrQuestions = [];

    let i = sliceArrQuestions.length;
    let numberOfIndexOfSliceQuestion = 0;

    while (i--) {
      numberOfIndexOfSliceQuestion = Math.floor(Math.random() * (i + 1));
      newArrQuestions.push(sliceArrQuestions[numberOfIndexOfSliceQuestion]);
      sliceArrQuestions.splice(numberOfIndexOfSliceQuestion, 1);
    }
    return newArrQuestions;
  };

  const questionsRandom = randomQuestion();

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

  const start = () => {
    let start = Date.now();

    setStartTime(start);
  };

  const stop = () => {
    let stop = Date.now();

    setStopTime(stop);
  };

  const handleChangeSelectLanguage = (e) => {
      const selectedLanguage = e.target.value;
      setLanguages(selectedLanguage);
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
          numberElementInFlashCard: numberElementInFlashCard,
          stop: stop,
          startTime: startTime,
          stopTime: stopTime,
        }}
      >
        <Switch>
          <Route path='/' exact>
            <Dashboard
              languages={languages}
              handleChangeSelectLanguage={handleChangeSelectLanguage}
              numberElementInFlashCard={numberElementInFlashCard}
              setNumberElementInFlashCard={setNumberElementInFlashCard}
              setAnswersGood={setAnswersGood}
              setAnswersBad={setAnswersBad}
              start={start}
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
