import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getToken, isUser } from '../../src/services/Authorization';

const LoginEmailVerified = () => {
  const [loginParams, setLoginParams] = useState({
    username: '',
    password: '',
  });

  const [errorValid, setErrorValid] = useState('');

  const [isLogIn, setIsLogIn] = useState(false);

  const [spinier, setSpinier] = useState(false);

  const formRef = useRef();

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    setTimeout(() => {
      setSpinier(false);
    }, 300);

    return () => setDidMount(false);
  }, [spinier]);

  const handleChange = (e) => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  const getDataToken = async () => {
    /**
     * Login
     */

    setSpinier(true);
    const isUserResponse = await isUser(loginParams.username);
    const isValidUser = isUserResponse['data'][loginParams.username];
    await getToken(loginParams);

    const savedTokenFromLocalStorage = localStorage.getItem('token');
    if (savedTokenFromLocalStorage !== null) {
      setIsLogIn(true);
      setSpinier(false);
    } else if (isValidUser === 'True') {
      setIsLogIn(false);
      setErrorValid('Incorrect password. Try again');
      setSpinier(false);
    } else {
      setIsLogIn(false);
      setErrorValid('User does not exist. Try to register first');
      setSpinier(false);
    }
  };

  const isLogInToApplication = (e) => {
    e.preventDefault();

    getDataToken();

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (isLogIn) {
    return <Redirect from='/LoginEmailVerified' to='/Dashboard' />;
  }

  if (!didMount) {
    return null;
  }

  return (
    <div className='ContainerLogin'>
      <div className='ContainerLogin_header'>Login Panel</div>

      <div className='ContainerLogin_main'>
        <div className='ContainerLogin_main-form'>
          <div className='ContainerLogin_main-form-text'>
            <span>
              Your account is verified now. Please log in with your credentials.
            </span>
          </div>

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

              <div
                className='fa-3x'
                style={{ color: 'orange', fontSize: '25px' }}
              >
                {spinier ? <i className='fa fa-spinner fa-pulse'></i> : ''}
              </div>

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

export default LoginEmailVerified;
