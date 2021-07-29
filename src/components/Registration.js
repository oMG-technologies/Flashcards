import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../src/services/Register';

const Registration = () => {
  const [registrationParams, setRegistrationParams] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });


  const formRef = useRef();

  const handleChange = (e) => {
    setRegistrationParams({
      ...registrationParams,
      [e.target.name]: e.target.value,
    });
  };

  const isRegistrationToApplication = (e) => {
    e.preventDefault();

    console.log('registrationParams', registrationParams);

    register(registrationParams);

    // if () {

    //   return <Redirect from='/Registration' to='/' />;
    // }

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className='ContainerRegistration'>
      <div className='ContainerRegistration_header'>Registration Panel:</div>

      <div className='ContainerRegistration_main'>
        <div className='ContainerRegistration_main-form'>
          <form onSubmit={isRegistrationToApplication} ref={formRef}>
            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your first name:</label>
              <input
                type='text'
                placeholder='Zbigniew'
                name='first_name'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your last name:</label>
              <input
                type='text'
                placeholder='Stonoga'
                name='last_name'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your email:</label>
              <input
                type='email'
                placeholder='user@domain.com'
                name='email'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerRegistration_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your user name:</label>
              <input
                type='text'
                placeholder='username'
                name='username'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>

            <div className='ContainerRegistration_main-form-input'>
              <label style={{ margin: '15px' }}>Set your password:</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                onChange={handleChange}
                className='inputLogin'
              />

              <input className='special' name='field_name' type='text' />

              <div className='ContainerRegistration_main-form-button'>
                <Link to='./' type='submit' className='btn_start'>
                  Back to the login panel
                </Link>

                <button type='submit' className='btn_createAccount'>
                  Create account
                </button>
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
