import React from 'react';
import authService from '../../../hooks/authService';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  const auth = authService();
  return (
    <Route {...rest} render={() => auth.isLogged ? (children) : (<Redirect to="/login" />)} />
  );
}

export default PrivateRoute;
