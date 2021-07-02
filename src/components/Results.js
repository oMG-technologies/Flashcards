import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

const Results = () => {
  const {
    questionsRandom,
    numberElementInFlashCard,
    answersBad,
    answersGood,
    startTime,
    stopTime,
    arrOfAnswers,
  } = useContext(MainContext);

  // console.log('arrOfAnswers[0]', arrOfAnswers[0]);

  return (
    <div className='ContainerResults'>
      <div className='ContainerResults_header'>Results</div>
      <div className='ContainerResults_results'>
        <h3>Your result:</h3>

        <strong>Total flip cards: </strong>
        {numberElementInFlashCard}
        <p>
          <strong>Good answers: </strong>
          {answersGood}
        </p>
        <p>
          <strong>Bad answers: </strong>
          {answersBad}
        </p>

        <p>
          <strong>You know: </strong>
          {((answersGood * 100) / numberElementInFlashCard).toFixed(2)}%
        </p>
        <p>
          <strong>Your time: </strong>
          {((stopTime - startTime) / 1000).toFixed(2)}s
        </p>
      </div>
      <div className='ContainerResults_table'>
        <table className='ContainerResults_table-main'>
          <thead>
            <tr>
              <th>No:</th>
              <th>Front card:</th>
              <th>Back Card:</th>
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
        <Link to='./FlashCard' className='btn_toTheFlashCard'>
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
