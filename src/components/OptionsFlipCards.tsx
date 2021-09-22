import React from 'react';
import { Link } from 'react-router-dom';

const OptionsFlipCards: React.FC = () => {
  return (
    <div>
      OptionsFlipCard
      <Link to='/Dashboard' className='btn_toTheFlipCard'>
       Dashboard
      </Link>
    </div>
  );
};

export default OptionsFlipCards;
