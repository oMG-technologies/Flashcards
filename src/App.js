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

  const [numerElemetInFlashCard] = useState(8);

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

  return (
    <Router>
      <MainContext.Provider value={questionsRandom}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/FlashCard' component={FlashCard} />
          <Route path='/Results' component={Results} />
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
