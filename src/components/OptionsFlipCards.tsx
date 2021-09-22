import React from 'react';
import { Link } from 'react-router-dom';

const OptionsFlipCards: React.FC = () => {
  return (
    <div>
      <div className='ContainerOptionsFlipCards'>
        <div className='ContainerOptionsFlipCards_header'>Option Flip Card</div>

        <div className='ContainerOptionsFlipCards_main'>
          <div className='ContainerOptionsFlipCards_main-welcomeUser'>
            <span style={{ fontSize: '22px' }}>
              Welcome <span style={{ color: 'orange' }}></span>! Nice to see
              you!
            </span>
          </div>

          <div className='ContainerOptionsFlipCards_main-removeUser'></div>
          <div className='ContainerOptionsFlipCards_main-selectLanguage'>
            <label style={{ margin: '15px' }}>Choose language</label>
          </div>

         
          <div className='ContainerOptionsFlipCards_main-chooseSide'>
            <label style={{ margin: '25px' }}>Choose side of cards</label>
          </div>
        </div>

        <div className='ContainerOptionsFlipCards_button'>
          <Link to='/Dashboard' className='btn_toTheFlipCard'>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionsFlipCards;
