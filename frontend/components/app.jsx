import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';

const App = () => (
  <div>
    <SessionModalContainer />
    <Route path={'/'} component={SplashContainer}/>
  </div>
);

export default App;
