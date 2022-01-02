import { AxiosResponse } from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getToken, isUser } from '../../services/Authorization';

const Login: React.FC = () => {
  const [loginParams, setLoginParams] = useState({
    username: '',
    password: '',
  });

  const [errorValid, setErrorValid] = useState('');

  const [isLogIn, setIsLogIn] = useState(false);

  const [spinier, setSpinier] = useState(false);

  const formRef = useRef<HTMLInputElement | any>();

  const [didMount, setDidMount] = useState(false);

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
      setErrorValid('Try again set the credentials');
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

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (isLogIn) {
    return <Redirect from='/' to='/Dashboard' />;
  }

  if (!didMount) {
    return null;
  }

  return (
    <div className='ContainerLogin'>
      <div className='ContainerLogin_header'>Login Panel</div>

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
                data-testid='input-username'
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
                data-testid='input-password'
              />

              <div
                className='fa-3x'
                style={{ color: 'orange', fontSize: '25px' }}
              >
                {spinier ? <i className='fa fa-spinner fa-pulse'></i> : ''}
              </div>

              <span style={{ color: 'red', fontSize: '14px' }} data-testid='span-validation-message'>
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
