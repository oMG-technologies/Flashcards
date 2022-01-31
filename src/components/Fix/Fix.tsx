import React from 'react';

const Fix: React.FC = (): JSX.Element => {
  return (
    <div className='loaded_page'>
      <h3 className='loaded_page-text'>
        {`We are adding new features and the app is currently unavailable. Please try again later! :)`}
        <div style={{ color: 'red', marginTop: '25px' }}>
          <i className='fa fa-cog fa-spin fa-3x fa-fw'></i>
        </div>
      </h3>
    </div>
  );
};

export default Fix;
