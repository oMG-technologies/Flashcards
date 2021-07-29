import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getToken } from '../../src/services/Authorization';

const Login = () => {
  const [loginParams, setLoginParams] = useState({
    username: '',
    password: '',
  });

  const [errorValid, setErrorValid] = useState();

  const [isLogIn, setIsLogIn] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  const isLogInToApplication = (e) => {
    e.preventDefault();

    const getDateToken = async () => {

      /**
       * Login
       */

      await getToken(loginParams);

      const savedTokenFromLocalStorage = localStorage.getItem('token');
      if (savedTokenFromLocalStorage !== null) {
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
        setErrorValid('Try again to get access or create account :)');
      }
    };

    getDateToken();

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (isLogIn) {
    return <Redirect from='/' to='/Dashboard' />;
  }

  return (
    <div className='ContainerLogin'>
      <div className='ContainerLogin_header'>Login Panel:</div>

      <div className='ContainerLogin_main'>
        <div className='ContainerLogin_main-form'>
          <form onSubmit={isLogInToApplication} ref={formRef}>
            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your user name:</label>
              <input
                type='text'
                placeholder='username'
                name='username'
                onChange={handleChange}
                className='inputLogin'
              />
            </div>
            <div className='ContainerLogin_main-form-input'>
              <label style={{ margin: '15px' }}>Enter your password:</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                onChange={handleChange}
                className='inputLogin'
              />

              <span style={{ color: 'red', fontSize: '14px' }}>
                {errorValid}
              </span>

              <div className='ContainerLogin_main-form-button'>
                <Link
                  to='./Registration'
                  type='submit'
                  className='btn_createAccount'
                >
                  Create Account
                </Link>
                <button type='submit' className='btn_start'>
                  Let's get started!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='ContainerLogin_footer'></div>
    </div>
  );
};

export default Login;
