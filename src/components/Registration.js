import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [registrationParams, setRegistrationParams] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setRegistrationParams({
      ...registrationParams,
      [e.target.name]: e.target.value,
    });
  };

  const isRegistration = (e) => {
    e.preventDefault();
    console.log(registrationParams);

    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <div className='ContainerRegistration'>
      <div className='ContainerRegistration_header'>Registration:</div>

      <div className='ContainerRegistration_main'>
        <div className='ContainerRegistration_main-form'>
          <form onSubmit={isRegistration} ref={formRef}>
            <label style={{ margin: '15px' }}>Enter your email</label>
            <input
              type='email'
              placeholder='user@domain.com'
              name='email'
              onChange={handleChange}
              style={{ marginTop: '10px' }}
            />
            <label style={{ margin: '15px' }}>Enter your user name</label>
            <input
              type='text'
              placeholder='Username'
              name='userName'
              onChange={handleChange}
              style={{ marginTop: '10px' }}
            />
            <label style={{ margin: '15px' }}>Enter your password:</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
              style={{ marginTop: '10px' }}
            />
            <div className='ContainerRegistration_button'>
              <button type='submit'>Created account</button>

              <Link to='./' type='submit' className='btn_toTheFlashCard'>
                Back to the login panel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
