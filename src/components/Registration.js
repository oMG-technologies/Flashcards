import { is } from '@babel/types';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../src/services/Register';
import { isUser, isEmail } from '../services/Authorization';

const Registration = () => {
  const [registrationParams, setRegistrationParams] = useState({
    email: '',
    password: '',
    username: '',
  });

  const initialError = {
    errorEmail: '',
    errorPassword: '',
    errorUsername: '',
  };
  const [errorsValidation, setErrorsValidation] = useState(initialError);

  // iRegistration info
  const [sendFormText, setSendFormText] = useState('');
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setRegistrationParams({
      ...registrationParams,
      [e.target.name]: e.target.value,
    });
  };

  const checkEmail = async (email) => {
    const isEmailResponse = await isEmail(email);
    const isValidEmail = await isEmailResponse['data'][email];
    return isValidEmail;
  };

  const checkUser = async (username) => {
    const isUserResponse = await isUser(username);
    const isValidUser = await isUserResponse['data'][username];
    return isValidUser;
  };

  const validate_email = async () => {
    const isEmailChecked = await checkEmail(registrationParams.email);
    if (isEmailChecked === 'True') {
      alert('This email has been already used')
    };
    return isEmailChecked;
  };

  const validate_username = async () => {
    const isUserChecked = await checkUser(registrationParams.username);
    if (isUserChecked === 'True') {
      alert('This username is already in use')
    };
    return isUserChecked;
  };

  // validate_email(registrationParams.email);
  // validate_username(registrationParams.username);

  const validate = async () => {
    let errorEmail = '';
    let errorUsername = '';
    let errorPassword = '';
    validate_email();
    validate_username();

    // const isEmailChecked = await checkEmail(registrationParams.email);
    // console.log(isEmailChecked);
    // const isUserChecked = await checkUser(registrationParams.username);
    // console.log(isUserChecked);

    if (registrationParams.email.length === 0) {
      errorEmail = 'set the email';
    }

    // if (isEmailChecked === 'True') {
    //   alert('This email has been already used')
    //   errorEmail = 'This email has been already used';
    // }

    if (registrationParams.username.length === 0) {
      errorUsername = 'set the user name';
    }

    // if (isUserChecked === 'True') {
    //   errorUsername = 'This username is already in use';
    // }

    if (registrationParams.password.length === 0) {
      errorPassword = 'set the password';
    }

    if (errorEmail ||  errorUsername || errorPassword) {
      setErrorsValidation({
        errorEmail,
        errorUsername,
        errorPassword,
      });
      return false;
    }
    return true;
  };

  const check = () => {
    const isValid = validate();

    if (isValid) {
      /**
       * Clear Error
       */
      setErrorsValidation(initialError);
    }
  };

  const isRegistrationToApplication = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      /**
       * Registration
       */
      register(registrationParams);
      setShowRegistrationInfo(true);
      setSendFormText(
        'Thank you for registering in FlipCards and choosing our product. Your account was successfully created and is almost ready to use. Open your email, click the link below to verify your email so we make sure everything is up and running!'
      );
    }

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className='ContainerRegistration'>
      <div className='ContainerRegistration_header'>Registration Panel</div>

      <div className='ContainerRegistration_main'>
        <div className='ContainerRegistration_main-form'>
          {showRegistrationInfo ? (
            <div>
              {sendFormText}
              <Link to='./' type='submit' className='btn_start-afterRegister'>
                After that go to login panel
              </Link>
            </div>
          ) : (
            <form onSubmit={isRegistrationToApplication} ref={formRef}>
              <div className='ContainerLogin_main-form-input'>
                <label style={{ margin: '15px' }}>Enter your email:</label>
                <input
                  type='email'
                  placeholder='user@domain.com'
                  name='email'
                  onChange={handleChange}
                  onBlur={check}
                  className='inputLogin'
                />
              </div>

              <span style={{ color: 'red', fontSize: '14px' }}>
                {errorsValidation.errorEmail}
              </span>

              <div className='ContainerRegistration_main-form-input'>
                <label style={{ margin: '15px' }}>Enter your user name:</label>
                <input
                  type='text'
                  placeholder='username'
                  name='username'
                  onChange={handleChange}
                  onBlur={check}
                  className='inputLogin'
                />
              </div>

              <span style={{ color: 'red', fontSize: '14px' }}>
                {errorsValidation.errorUsername}
              </span>

              <div className='ContainerRegistration_main-form-input'>
                <label style={{ margin: '15px' }}>Set your password:</label>
                <input
                  type='password'
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={check}
                  className='inputLogin'
                />

                <span style={{ color: 'red', fontSize: '14px' }}>
                  {errorsValidation.errorPassword}
                </span>

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
          )}
        </div>
      </div>
      <div className='ContainerRegistration_footer'></div>
    </div>
  );
};

export default Registration;
