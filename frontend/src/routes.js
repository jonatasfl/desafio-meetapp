import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';

import MainLayout from '~/MainLayout';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Signin from '~/pages/Signin';

export default function Routes() {
  return (
    <Switch>
      <AppRoute path="/" exact component={Dashboard} />
      <AppRoute path="/profile" exact component={Profile} />
      <AppRoute path="/signin" exact component={Signin} blank />
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
