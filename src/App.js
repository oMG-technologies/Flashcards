import React, { useState, useEffect } from 'react';
import './App.css';

import FlashCard from './components/FlashCard';

import {MainContext} from './context/MainContext';

import {getAllQuestions, getQuestionById} from './services/ApiService';

function App() {

  const [questions, setQuestion] = useState([])

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async() => {
    const dataQuestions = await getAllQuestions()
    setQuestion(dataQuestions)
  }
  // console.log(questions)

  return (
    <MainContext.Provider value={questions}>
      <div className='App'>
        <FlashCard />
      </div>
    </MainContext.Provider> 
  );
}

export default App;
