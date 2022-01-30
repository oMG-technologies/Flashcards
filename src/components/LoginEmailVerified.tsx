import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getToken, isUser } from '../services/Authorization';

import { LoginInitial } from './Login';

const LoginEmailVerified: React.FC = (): JSX.Element | null => {
  const [loginParams, setLoginParams] = useState<LoginInitial>({
    username: '',
    password: '',
  });

  const [errorValid, setErrorValid] = useState<string>('');

  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  const [spinier, setSpinier] = useState<boolean>(false);

  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);

    setTimeout(() => {
      setSpinier(false);
    }, 300);

    return () => setDidMount(false);
  }, [spinier]);

  /**
   * Set up login params
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Login
   */
  const getDataToken = async (): Promise<void> => {
    setSpinier(true);
    const isUserResponse: AxiosResponse | any = await isUser(
      loginParams.username
    );
    const isValidUser: boolean = isUserResponse['data'][loginParams.username];
    await getToken(loginParams);

    const savedTokenFromLocalStorage: string | null =
      localStorage.getItem('token');
    if (savedTokenFromLocalStorage !== null) {
      setIsLogIn(true);
      setSpinier(false);
    } else if (isValidUser) {
      setIsLogIn(false);
      setErrorValid('Incorrect password. Try again');
      setSpinier(false);
    } else {
      setIsLogIn(false);
      setErrorValid('User does not exist. Try to register first');
      setSpinier(false);
    }
  };

  const isLogInToApplication = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();

    getDataToken();
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

          <form onSubmit={isLogInToApplication}>
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
