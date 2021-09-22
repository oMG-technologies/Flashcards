import React from 'react';
import { Link } from 'react-router-dom';

const OwnFlipCards: React.FC = () => {
  return (
    <div className='ContainerOwnFlipCards'>
      <div className='ContainerOwnFlipCards_header'>Own flip card</div>

      <div className='ContainerOwnFlipCards_main'>
        <div className='ContainerOwnFlipCards_main-selectOptions'>
          Place for own FlipCards
        </div>
      </div>

      <div className='ContainerOwnFlipCards_button'>
        <Link to='/OptionsFlipCards' className='btn_toSettings'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default OwnFlipCards;
