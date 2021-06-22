import React from 'react';

const Loaded = () => {
  return (
    <div className='loaded_page'>
      <h3 className='loaded_page-text'>
        {`Loading... Please give mi a few minute :)`}
        <div className='loaded_page-dotted'>
          <div className='dot-pulse'></div>
        </div>
      </h3>
    </div>
  );
};

export default Loaded;
