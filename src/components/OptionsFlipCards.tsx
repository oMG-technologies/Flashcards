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

          <div className='ContainerOptionsFlipCards_main-selectOptions'>
            <label style={{ margin: '15px' }}>Select options:</label>
            <Link to='/Dashboard' className='btn_toOptionsFlipCards'>
              Learn English
            </Link>
            <Link to='/Dashboard' className='btn_toOptionsFlipCards'>
              Create own FlipCards
            </Link>
          </div>
        </div>

        <div className='ContainerOptionsFlipCards_button'></div>
      </div>
    </div>
  );
};

export default OptionsFlipCards;
