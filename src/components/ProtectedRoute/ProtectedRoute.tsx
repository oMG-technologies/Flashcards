import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC = ({
  children,
  ...rest
}: IProtectedRouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
