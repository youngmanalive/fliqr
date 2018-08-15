import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashWelcomeContainer from './splash/splash_welcome_container';
import Home from './home/home';
import PhotoUpload from './photos/photo_upload';


const App = () => (
  <div className="app">
    <Route path='/' component={SessionModalContainer} />
    <NavBarContainer />

    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <ProtectedRoute path='/upload' component={PhotoUpload} />
      <AuthRoute path="/" component={SplashWelcomeContainer} />
    </Switch>
  </div>
);

export default App;


// <ProtectedRoute path='/photos/:photoId' component={PhotoShowContainer} />
// <ProtectedRoute path='/users/:userId' component={UserShowContainer} />
