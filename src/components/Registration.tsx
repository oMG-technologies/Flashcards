import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { register } from '../services/Register';
import { isUser, isEmail } from '../services/Authorization';
import { AxiosResponse } from 'axios';

type InitialRegistration = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

type InitialError = {
  errorEmail?: string;
  errorUsername?: string;
  errorPassword?: string;
  errorRepeatPassword?: string;
};

const Registration: React.FC = (): JSX.Element => {
  const [registrationParams, setRegistrationParams] =
    useState<InitialRegistration>({
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    });

  /**
   * Validation input errors
   */
  const initialError = {
    errorEmail: '',
    errorUsername: '',
    errorPassword: '',
    errorRepeatPassword: '',
  };
  const [errorsValidation, setErrorsValidation] =
    useState<InitialError>(initialError);

  /**
   * Registration info
   */
  const [sendFormText, setSendFormText] = useState<string>('');
  const [showRegistrationInfo, setShowRegistrationInfo] =
    useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRegistrationParams({
      ...registrationParams,
      [e.target.name]: e.target.value,
    });
  };

  const checkEmail = async (email: string): Promise<boolean> => {
    const isEmailResponse: AxiosResponse | any = await isEmail(email);
    const isValidEmail = await isEmailResponse['data'][email];
    return isValidEmail;
  };

  const checkUser = async (username: string): Promise<boolean> => {
    const isUserResponse: AxiosResponse | any = await isUser(username);
    const isValidUser: boolean = await isUserResponse['data'][username];
    console.log('isValidUser', isValidUser);
    return isValidUser;
  };

  const validateEmail = async (): Promise<boolean> => {
    let errorEmail: string = '';
    const isEmailChecked = await checkEmail(registrationParams.email);
    if (isEmailChecked) {
      errorEmail = 'This email has been already used';
      setErrorsValidation({
        errorEmail,
      });
    } else {
      errorEmail = '';
      setErrorsValidation({
        errorEmail,
      });
    }
    return isEmailChecked;
  };

  const validateUsername = async (): Promise<boolean> => {
    let errorUsername: string = '';
    const isUserChecked = await checkUser(registrationParams.username);
    if (isUserChecked) {
      errorUsername = 'This username is already in use';
      setErrorsValidation({
        errorUsername,
      });
    } else {
      errorUsername = '';
      setErrorsValidation({
        errorUsername,
      });
    }
    return isUserChecked;
  };

  const validate = (): boolean => {
    let errorEmail: string = '';
    let errorUsername: string = '';
    let errorPassword: string = '';
    let errorRepeatPassword: string = '';

    validateEmail();
    validateUsername();

    if (registrationParams.email.length === 0) {
      errorEmail = 'set the email';
    }

    if (registrationParams.username.length === 0) {
      errorUsername = 'set the user name';
    }

    if (registrationParams.password.length === 0) {
      errorPassword = 'set the password';
    }

    if (registrationParams.repeatPassword.length === 0) {
      errorRepeatPassword = 'set the repeat password';
    }

    if (registrationParams.password !== registrationParams.repeatPassword) {
      (errorPassword = 'set the same password') ||
        (errorRepeatPassword = 'set the same password');
    }

    if (errorEmail || errorUsername || errorPassword || errorRepeatPassword) {
      setErrorsValidation({
        errorEmail,
        errorUsername,
        errorPassword,
        errorRepeatPassword,
      });
      return false;
    }
    return true;
  };

  const check = (): void => {
    const isValid: boolean = validate();

    if (isValid) {
      /**
       * Clear Error
       */
      setErrorsValidation(initialError);
    }
  };

  const isRegistrationToApplication = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    e.preventDefault();
    const isValid: boolean = validate();

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
            <form onSubmit={isRegistrationToApplication}>
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
              </div>

              <div className='ContainerRegistration_main-form-input'>
                <label style={{ margin: '15px' }}>
                  Set repeated your password:
                </label>
                <input
                  type='password'
                  placeholder='repeated your password'
                  name='repeatPassword'
                  onChange={handleChange}
                  onBlur={check}
                  className='inputLogin'
                />

                <span style={{ color: 'red', fontSize: '14px' }}>
                  {errorsValidation.errorRepeatPassword}
                </span>
              </div>

              <div className='ContainerRegistration_main-form-button'>
                <Link to='./' type='submit' className='btn_start'>
                  Back to the login panel
                </Link>

                <button type='submit' className='btn_createAccount'>
                  Create account
                </button>
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
