import React from 'react';
import { Link } from 'react-router-dom';

const OptionsFlipCards: React.FC = () => {
  /**
   * Save user to local storage
   */
  const savedUserFromLocalStorage: string | null = localStorage.getItem('user');
  return (
    <div>
      <div className='ContainerOptionsFlipCards'>
        <div className='ContainerOptionsFlipCards_header'>Option Flip Card</div>

        <div className='ContainerOptionsFlipCards_main'>
          <div className='ContainerOptionsFlipCards_main-welcomeUser'>
            <span style={{ fontSize: '22px' }}>
              Welcome{' '}
              <span style={{ color: 'orange' }}>
                {savedUserFromLocalStorage}
              </span>
              ! Nice to see you!
            </span>
          </div>

          <div className='ContainerOptionsFlipCards_main-selectOptions'>
            {/* <label style={{ margin: '15px' }}>Select options:</label> */}
            <Link to='/Dashboard' className='btn_toDashboard'>
              Learn English
            </Link>
            <Link to='/Dashboard' className='btn_toOwnFlipCard'>
              Create own flip cards
            </Link>
          </div>
        </div>

        <div className='ContainerOptionsFlipCards_button'></div>
      </div>
    </div>
  );
};

export default OptionsFlipCards;
