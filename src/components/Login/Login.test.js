import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

import { BrowserRouter } from 'react-router-dom';

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe('Login tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockLogin />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockLogin />);
  });

});

describe('Tests elements UI', () => {
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
