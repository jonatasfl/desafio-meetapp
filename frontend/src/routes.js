import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';

import MainLayout from '~/MainLayout';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';

export default function Routes() {
  return (
    <Switch>
      <AppRoute path="/" exact component={Dashboard} />
      <AppRoute path="/profile" exact component={Profile} />
      <AppRoute path="/new" exact component={New} />
      <AppRoute path="/signin" exact component={Signin} blank />
      <AppRoute path="/signup" exact component={Signup} blank />
    </Switch>
  );
}

const AppRoute = ({ component: Component, auth, blank, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // Se for uma rota protegida e o usuário não estiver logado
      /* if (auth && !isAuthenticated()) {
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
      } */

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
};

AppRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired,
  auth: propTypes.bool,
  blank: propTypes.bool,
};