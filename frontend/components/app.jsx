import React from 'react';
import { Route } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashWelcome from './splash/splash_welcome';

const App = () => (
  <div>
    <SessionModalContainer />
    <NavBarContainer />
    <SplashWelcome />
  </div>
);

export default App;
