import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';

import { BrowserRouter } from 'react-router-dom';

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe('Login Tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockLogin />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockLogin />);
  });
});

describe('Tests Elements UI', () => {
  it('render input username', () => {
    render(<MockLogin />);

    const checkInputName = screen.getByTestId('input-username');

    expect(checkInputName).toBeInTheDocument();
  });

  it('render input password', () => {
    render(<MockLogin />);

    const checkInputPassword = screen.getByTestId('input-password');

    expect(checkInputPassword).toBeInTheDocument();
  });

  it('render button Create account', () => {
    render(<MockLogin />);

    const buttonCreateAccount = screen.getByText(/Create Account/i);

    expect(buttonCreateAccount).toBeInTheDocument();
  });

  it('render button Lets get started', () => {
    render(<MockLogin />);

    const buttonLetsGetStarted = screen.getByText(/Let's get started!/i);

    expect(buttonLetsGetStarted).toBeInTheDocument();
  });
});

describe('Tests Business Logic', () => {
  it('render input element with value', () => {
    render(<MockLogin />);

    const checkInputName = screen.getByTestId('input-username');
    fireEvent.change(checkInputName, { target: { value: 'Admin' } });

    expect(checkInputName.value).toBe('Admin');
  });

  it('render input with value after clicked', () => {
    render(<MockLogin />);

    const checkInputName = screen.getByTestId('input-username');
    const buttonLetsGetStarted = screen.getByText(/Let's get started!/i);

    fireEvent.change(checkInputName, { target: { value: 'Admin' } });
    fireEvent.click(buttonLetsGetStarted);

    expect(checkInputName.value).toBe('Admin');
  });

  it('render validation info when user does not exist', async () => {
    render(<MockLogin />);

    const checkInputName = screen.getByTestId('input-username');
    const buttonLetsGetStarted = screen.getByText(/Let's get started!/i);
    const validationInfo = 'User does not exist. Try to register first';

    fireEvent.change(checkInputName, { target: { value: 'Random' } });
    fireEvent.click(buttonLetsGetStarted);
    

    await waitFor(() => {
      const spanMassageValidation = screen.getByTestId(
        'span-validation-message'
      );

      expect(spanMassageValidation).toHaveTextContent(validationInfo);
    });
  });

  it('render validation info when you forget add password or password is incorrect', async () => {
    render(<MockLogin />);

    const checkInputName = screen.getByTestId('input-username');
    const buttonLetsGetStarted = screen.getByText(/Let's get started!/i);
    const validationInfo = 'Incorrect password. Try again';

    fireEvent.change(checkInputName, { target: { value: 'Admin' } });
    fireEvent.click(buttonLetsGetStarted);

    await waitFor(() => {
      const spanMassageValidation = screen.getByTestId(
        'span-validation-message'
      );

      expect(spanMassageValidation).toHaveTextContent(validationInfo);
    });
  });
});
