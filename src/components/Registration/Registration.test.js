import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Registration from './Registration';

import { BrowserRouter } from 'react-router-dom';

const MockRegistration = () => {
  return (
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
};

describe('Registration Tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockRegistration />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockRegistration />);
  });
});

describe('Tests Business Logic', () => {
  it('show validation info when click create account in empty form', async () => {
    render(<MockRegistration />);

    const buttonCreateAccount = screen.getByText(/Create account/i);
    const validationInfoEmail = 'set the email';
    const validationInfoUserName = 'set the user name';
    const validationInfoPassword = 'set the password';
    const validationInfoRepeatedPassword = 'set the repeat password';

    fireEvent.click(buttonCreateAccount);

    await waitFor(() => {
      const emailMassageValidation = screen.getByTestId(
        'span-validationEmail-message'
      );

      const userNameMassageValidation = screen.getByTestId(
        'span-validationUsername-message'
      );

      const passwordMassageValidation = screen.getByTestId(
        'span-validationPassword-message'
      );

       const repetendPasswordMassageValidation = screen.getByTestId(
         'span-validationRepeatPassword-message'
       );

      expect(emailMassageValidation).toHaveTextContent(validationInfoEmail);
      expect(userNameMassageValidation).toHaveTextContent(
        validationInfoUserName
      );
      expect(passwordMassageValidation).toHaveTextContent(
        validationInfoPassword
      );

      expect(repetendPasswordMassageValidation).toHaveTextContent(
        validationInfoRepeatedPassword
      );

    });
  });
});
