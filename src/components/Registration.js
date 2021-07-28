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
      <div className='ContainerRegistration_header'>Registration Panel:</div>

      <div className='ContainerRegistration_main'>
        <div className='ContainerRegistration_main-form'>
          <form onSubmit={isRegistration} ref={formRef}>
            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your email</label>
              <input
                type='email'
                placeholder='user@domain.com'
                name='email'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerRegistration_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your user name</label>
              <input
                type='text'
                placeholder='Username'
                name='userName'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerRegistration_main-form-input'>
              <label style={{ margin: '15px' }}>Set your password:</label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                className='inputLogin'
              />
              <input className='special' name='field_name' type='text' />

              <div className='ContainerRegistration_main-form-button'>
                <button type='submit' className='btn_createAccount'>
                  Created account
                </button>

                <Link to='./' type='submit' className='btn_start'>
                  Back to the login panel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='ContainerRegistration_footer'></div>
    </div>
  );
};

export default Registration;
