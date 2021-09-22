import React from 'react';
import { Link } from 'react-router-dom';

const OwnFlipCards: React.FC = () => {
  return (
    <div>
      Own FlipCards
      <Link to='/OptionsFlipCards' className='btn_toDashboard'>
        Back
      </Link>
    </div>
  );
};

export default OwnFlipCards;
