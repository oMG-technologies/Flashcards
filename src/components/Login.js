import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
  const [loginParams, setLoginParams] = useState({
    userName: '',
    password: '',
  });

  const [isLogIn, setIsLogIn] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  const isLogInToApplication = (e) => {
    let name = loginParams.userName;
    let password = loginParams.password;

    if (name === 'admin' && password === '123') {
      localStorage.setItem('token', 'T');
      setIsLogIn(true);
    } else {
      alert('Try again to get access !');
    }

    e.preventDefault();
    console.log(loginParams);

    if (formRef.current) {
      formRef.current.reset();
    }
  };


  if (isLogIn) {
    return <Redirect from='/' to='/Dashboard' />;
  }

  return (
    <div className='ContainerLogin'>
      <div className='ContainerLogin_header'>Login:</div>

      <div className='ContainerLogin_main'>
        <div className='ContainerLogin_main-form'>
          <form onSubmit={isLogInToApplication} ref={formRef}>
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
            <div className='ContainerLogin_button'>
              <Link
                to='./Registration'
                type='submit'
                className='btn_toTheFlashCard'
              >
                Create Account
              </Link>
              <button type='submit'>Let's get started!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
