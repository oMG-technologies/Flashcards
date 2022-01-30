import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = ():JSX.Element => {
  return (
    <div className='notFound-container'>
      <div className='notFound-container-text'>
        <h3 className='notFound'> Page not found... :/</h3>
      </div>

      <div className='notFound-container-button'>
        <Link to='./' className='btn-back_Application_Not_Found'>
          Back to Application
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
