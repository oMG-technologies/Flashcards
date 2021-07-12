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
    flip,
  } = useContext(MainContext);

  const h = () => {
    if (time.h === 0) {
      return '';
    } else {
      return <span>{time.h >= 10 ? time.h : '0' + time.h}</span>;
    }
  };

  // Pronunciation
  const playAudio = (i) => {
    let audioEl = document.getElementsByClassName('audio-element')[i];

    audioEl.play();
  };

  return (
    <div className='ContainerResults'>
      <div className='ContainerResults_header'>Results</div>
      <div className='ContainerResults_results'>
        <h3>Your score:</h3>

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
          <strong>Final score: </strong>
          {((answersGood * 100) / numberElementInFlashCard).toFixed(2)}%
        </p>
        <p>
          <strong>Time: </strong>
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
              <th>#</th>
              {flip ? <th>Back card:</th> : <th>Front Card:</th>}
              {flip ? <th>Front card:</th> : <th>Back Card:</th>}
              <th>Pronunciation:</th>
              <th>Your answer:</th>
            </tr>
          </thead>
          <tbody>
            {questionsRandom.map((el, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>

                {flip ? <td>{el.backCard}</td> : <td>{el.frontCard}</td>}
                {flip ? (
                  <td>
                    {el.frontCard}
                    <audio
                      className='audio-element'
                      src={el.pronunciation_frontCard}
                    ></audio>
                  </td>
                ) : (
                  <td>
                    {el.backCard}
                    <audio
                      className='audio-element'
                      src={el.pronunciation_backCard}
                    ></audio>
                  </td>
                )}

                <td>
                  <button
                    onClick={() => playAudio(i)}
                    className='btn-pronunciation-table'
                  >
                    <span>
                      <i className='fa fa-volume-up'></i>
                    </span>
                  </button>
                </td>

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
          Back to flip cards
        </Link>
        <Link to='./' className='btn_home'>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Results;
