import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginParams, setLoginParams] = useState({
    userName: '',
    password: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  const isLogIn = (e) => {
    e.preventDefault();
    console.log(loginParams);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className='ContainerLogin'>
      <div className='ContainerLogin_header'>Login:</div>

      <div className='ContainerLogin_main'>
        <div className='ContainerLogin_main-form'>
          <form onSubmit={isLogIn} ref={formRef}>
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
