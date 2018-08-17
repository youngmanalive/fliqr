import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ path, exact, loggedIn, component: Component }) => (
  <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/explore' />
      )
  )} />
);

const Protected = ({ path, exact, loggedIn, component: Component }) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
  )} />
);

const msp = state => ({ loggedIn: Boolean(state.session.currentUserId)});

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
