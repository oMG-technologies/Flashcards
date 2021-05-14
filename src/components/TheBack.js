import React,{useState} from 'react';

import { MainContext } from '../context/MainContext';

const TheBack = ({ currentQuestion }) => {

  const [iknow, setIknow] = useState(0)
  const [iDontknow, setIDontknow] = useState(0)

  console.log('iknow',iknow)
  const IknowClick = () => {
    console.log('IknowClick')
    setIknow(iknow + 1)
  }

  console.log('IDontknowClick', iDontknow)
  const IDontknowClick = () => {
    console.log('IDontknowClick')
    setIDontknow(iDontknow + 1)
  }


  return (
    <MainContext.Provider value={iknow}>
      <div className='theBack'>
        Back
        <p className='eanglishMeaning'>
          {currentQuestion.map((el) => (
            <span key={el.id}>{el.backCard}</span>
          ))}
        </p>
        <div className='mainContainer_button'>
          <button className='btn_Iknow' onClick={IknowClick}>I know</button>
          <button className='btn_IDonTknow'onClick={IDontknowClick}>I don't know</button>
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default TheBack;
