import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { MainContext } from '../context/MainContext';

const Results = () => {
  const { questionsRandom, prevStep } = useContext(MainContext);

  return (
    <div className='ContainerResults'>
      <div className='ContainerResults_header'>Results</div>
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
        <Link to = './FlashCard' className='btn_toTheFlashCard'> To the FlashCard</Link>
        <Link to = './' className = 'btn_home'>Back home</Link>

      </div>
    </div>
  );
};

export default Results;
