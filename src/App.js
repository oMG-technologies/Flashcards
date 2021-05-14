import React, { useState, useEffect} from 'react';
import './App.css';

import FlashCard from './components/FlashCard';

import { MainContext } from './context/MainContext';

import { getAllQuestions } from './services/ApiService';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestions = await getAllQuestions();
    setQuestions(dataQuestions);
  };

  const randomQuestion = () => {
    let newArrQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);

      const item = questions[randomIndex];

      newArrQuestions.push(item);
    }

    return newArrQuestions;
  };

  const questionsRandom = randomQuestion();

  return (
    <MainContext.Provider value={questionsRandom}>
      <FlashCard  />
    </MainContext.Provider>
  );
}

export default App;
