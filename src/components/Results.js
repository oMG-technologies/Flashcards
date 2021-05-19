import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

const Results = () => {
  const { questionsRandom, numerElemetInFlashCard, time, answersBad, answersGood } = useContext(MainContext);

  return (
    <div className='ContainerResults'>
      <div className='ContainerResults_header'>Results</div>
      <div className='ContainerResults_results'>
        <h3>Your result:</h3>
        <p>
          Total flip cards: {numerElemetInFlashCard}
          <p>Good answers: {answersGood}</p>
          <p>Bad answers: {answersBad}</p>
        </p>
        <p>
          <strong>You know: {((answersGood * 100) / numerElemetInFlashCard).toFixed(2)}%</strong>
        </p>
        <p>
          <strong>Your time: </strong>
          {time.h >= 10 ? time.h : '0' + time.h}:
          {time.m >= 10 ? time.m : '0' + time.m}:
          {time.s >= 10 ? time.s : '0' + time.s}:
          {time.ms >= 10 ? time.ms : '0' + time.ms}
        </p>
      </div>
      <div className='ContainerResults_tabel'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Front card</th>
              <th>Back Card</th>
            </tr>
          </thead>
          <tbody>
            {questionsRandom.map((el, i) => (
              <tr key={i + 1}>
                <th key={el.id}>{i + 1}</th>
                <td key={el.name}>{el.frontCard}</td>
                <td key={el.email}>{el.backCard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='ContainerResults_button'>
        {/* <button className='btn_toTheFlashCard' onClick={prevStep}> To the FlashCard</button>
        <button className='btn_home'>Home</button> */}
        <Link to='./FlashCard' className='btn_toTheFlashCard'>
          {' '}
          To the FlashCard
        </Link>
        <Link to='./' className='btn_home'>
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Results;
