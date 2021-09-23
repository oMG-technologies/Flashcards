import React from 'react';
import { Link } from 'react-router-dom';

const OwnFlipCards: React.FC = () => {
  return (
    <div className='ContainerOwnFlipCards'>
      <div className='ContainerOwnFlipCards_header'>Own flip card</div>

      <div className='ContainerOwnFlipCards_table'>
        <table className='ContainerOwnFlipCards_table-main'>
          <thead>
            <tr>
              <th>#</th>
              <th>Front card:</th>
              <th>Back card:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>dog</td>
              <td>piesdsadsadsa</td>
              <td>
                <button className='btn-editFlipCard'>Edit</button>
                <button className='btn-removeFlipCard'> Deleted</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ale jest ogien</td>
              <td>piesdsadsadsa</td>
              <td>
                <button className='btn-editFlipCard'>Edit</button>
                <button className='btn-removeFlipCard'> Deleted</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>cat</td>
              <td>kot</td>
              <td>
                <button className='btn-editFlipCard'>Edit</button>
                <button className='btn-removeFlipCard'> Deleted</button>
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            {questionsRandom.map(
              (
                el: {
                  id: number;
                  frontCard: string;
                  backCard: string;
                  pronunciation_frontCard: string;
                  pronunciation_backCard: string;
                  source_language: string;
                  target_language: string;
                },
                i: number
              ) => (
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
              )
            )}
          </tbody> */}
        </table>
      </div>

      <div className='ContainerOwnFlipCards_button'>
        <Link to='/OptionsFlipCards' className='btn_toSettings'>
          Back
        </Link>
        <Link to='/OptionsFlipCards' className='btn_toAddNewFlipCard'>
          Add new Flip card
        </Link>
        <Link to='/OptionsFlipCards' className='btn_toStartOwnFlipCard '>
          Start
        </Link>
      </div>
    </div>
  );
};

export default OwnFlipCards;
