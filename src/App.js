import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';

import Dashboard from './components/Dashboard';
import FlashCard from './components/FlashCard';
import Results from './components/Results';

import { MainContext } from './context/MainContext';

import { getAllQuestions } from './services/ApiService';

function App() {
  const [questions, setQuestions] = useState([]);

  const [answersGood, setAnswersGood] = useState(0);
  const [answersBad, setAnswersBad] = useState(0);

  const [numerElemetInFlashCard, setNumerElemetInFlashCard] = useState(10);

  // Timer
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState();

  const getQuestions = async () => {
    const dataQuestions = await getAllQuestions();
    setQuestions(dataQuestions);
  };

  useEffect(() => {
    getQuestions();
    setAnswersGood(0);
    setAnswersBad(0);
  }, []);

  // Slice questions Arr
  const indexOfLastMainArrQuestion = numerElemetInFlashCard;
  const indexOfFirstMainQuestion =
    indexOfLastMainArrQuestion - numerElemetInFlashCard;
  const currentArr = questions.slice(
    indexOfFirstMainQuestion,
    indexOfLastMainArrQuestion
  );

  const randomQuestion = () => {
    let newArrQuestions = [];
    for (let i = 0; i < currentArr.length; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const item = questions[randomIndex];
      newArrQuestions.push(item);
    }
    return newArrQuestions;
  };

  const questionsRandom = randomQuestion();

  // Create Result
  const IknowClick = () => {
    if (answersGood + answersBad < numerElemetInFlashCard) {
      setAnswersGood(answersGood + 1);
    }
  };
  const IdontknowClick = () => {
    if (answersGood + answersBad < numerElemetInFlashCard) {
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

  return (
    <Router>
      <MainContext.Provider
        value={{
          questionsRandom: questionsRandom,
          answersGood: answersGood,
          answersBad: answersBad,
          IdontknowClick: IdontknowClick,
          IknowClick: IknowClick,
          numerElemetInFlashCard: numerElemetInFlashCard,
          stop: stop,
          startTime: startTime,
          stopTime: stopTime,
        }}
      >
        <Switch>
          <Route path='/' exact>
            <Dashboard
              numerElemetInFlashCard={numerElemetInFlashCard}
              setNumerElemetInFlashCard={setNumerElemetInFlashCard}
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
