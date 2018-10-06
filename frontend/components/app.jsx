import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import AlbumFormContainer from './albums/album_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import SessionModalContainer from './modals/session_modal_container';
import SplashWelcomeContainer from './splash/splash_welcome_container';
import UserProfileContainer from './users/user_profile_container';

const App = () => (
  <div className='app' >
    <Route path='/' component={SessionModalContainer} />
    <NavBarContainer />

    <Switch>
      <ProtectedRoute path='/explore' component={PhotoIndexContainer} />
      <ProtectedRoute path='/upload' component={PhotoUploadContainer} />
      <ProtectedRoute path='/photos/:photoId' component={PhotoShowContainer} />
      <ProtectedRoute path='/users/:userId' component={UserProfileContainer} />
      <ProtectedRoute path='/organize/:albumId' component={AlbumFormContainer} />
      <ProtectedRoute path='/organize' component={AlbumFormContainer} />
      <AuthRoute exact path='/' component={SplashWelcomeContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;