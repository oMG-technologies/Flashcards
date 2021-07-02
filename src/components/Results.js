import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

const Results = () => {
  const {
    questionsRandom,
    numberElementInFlashCard,
    answersBad,
    answersGood,
    arrOfAnswers,
    time,
  } = useContext(MainContext);

  const h = () => {
    if (time.h === 0) {
      return '';
    } else {
      return <span>{time.h >= 10 ? time.h : '0' + time.h}</span>;
    }
  };

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
          {h()} &nbsp;&nbsp;
          <span>{time.m >= 10 ? time.m : '0' + time.m}</span>&nbsp;:&nbsp;
          <span>{time.s >= 10 ? time.s : '0' + time.s}</span>&nbsp;:&nbsp;
          <span>{time.ms >= 10 ? time.ms : '0' + time.ms} s</span>
        </p>
      </div>
      <div className='ContainerResults_table'>
        <table className='ContainerResults_table-main'>
          <thead>
            <tr>
              <th>No:</th>
              <th>Front card:</th>
              <th>Back Card:</th>
              <th>Your answer:</th>
            </tr>
          </thead>
          <tbody>
            {questionsRandom.map((el, i) => (
              <tr key={i + 1}>
                <th key={el.id}>{i + 1}</th>
                <td key={el.name}>{el.frontCard}</td>
                <td key={el.email}>{el.backCard}</td>

                {arrOfAnswers[i] ? (
                  <td>
                    <span className='mainContainer_boxIcon-check' key={i}>
                      <i className='fa fa-check'></i>
                    </span>
                  </td>
                ) : (
                  <td>
                    <span className='mainContainer_boxIcon-remove' key={i}>
                      <i className='fa fa-remove'></i>
                    </span>
                  </td>
                )}
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