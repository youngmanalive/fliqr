import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
const App = () => (
  <div>
    <SessionModalContainer />
    <NavBarContainer />
  </div>
);

export default App;
