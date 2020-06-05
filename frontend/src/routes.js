import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import MainLayout from '~/Layout';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';
import View from '~/pages/View';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';

import { isAuthenticated } from '~/services/auth';

export default function Routes() {
  return (
    <Switch>
      <AppRoute path="/" exact component={Dashboard} auth />
      <AppRoute path="/profile" exact component={Profile} auth />
      <AppRoute path="/new" exact component={New} auth />
      <AppRoute path="/edit/:id" exact component={New} auth />
      <AppRoute path="/view/:id" exact component={View} auth />
      <AppRoute path="/login" exact component={Signin} blank />
      <AppRoute path="/signup" exact component={Signup} blank />
    </Switch>
  );
}

const AppRoute = ({ component: Component, auth, blank, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // Se for uma rota protegida e o usuário não estiver logado
      if (auth && !isAuthenticated()) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }

      // Se não precisar do layout completo
      // EX: Login, Registro
      if (blank) {
        return <Component {...props} />;
      }

      return (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      );
    }}
  />
);

AppRoute.defaultProps = {
  auth: false,
  blank: false,
  location: undefined,
};

AppRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired,
  auth: propTypes.bool,
  blank: propTypes.bool,
  location: propTypes.any,
};
