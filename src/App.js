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
  console.log(questions);

  const [answers, setAnswers] = useState(0);

  const [numerElemetInFlashCard, setNumerElemetInFlashCard] = useState(5);

  // Slice questions Arr
  const indexOfLastMainArrQuestion = numerElemetInFlashCard;
  const indexOfFirstMainQuestion =
    indexOfLastMainArrQuestion - numerElemetInFlashCard;
  const currentArr = questions.slice(
    indexOfFirstMainQuestion,
    indexOfLastMainArrQuestion
  );

  console.log('currentArr', currentArr);

  useEffect(() => {
    getQuestions();
    setAnswers(0)
  }, []);

  const getQuestions = async () => {
    const dataQuestions = await getAllQuestions();
    setQuestions(dataQuestions);
  };

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
    setAnswers(answers + 1);
  };

  const IDontknowClick = () => {
    setAnswers(answers - 1);
  };

  return (
    <Router>
      <MainContext.Provider value={{ questionsRandom: questionsRandom, answers:answers, IknowClick:IknowClick, IDontknowClick:IDontknowClick, numerElemetInFlashCard:numerElemetInFlashCard}}>
        <Switch>
          <Route path='/' exact>
            <Dashboard
              numerElemetInFlashCard={numerElemetInFlashCard}
              setNumerElemetInFlashCard={setNumerElemetInFlashCard}
            />
          </Route>
          <Route path='/FlashCard' exact>
            <FlashCard  />
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
