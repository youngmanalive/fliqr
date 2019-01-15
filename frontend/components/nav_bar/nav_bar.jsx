import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SplashSessionContainer from '../splash/splash_session_container';

const gitHub = <a target='_blank' href='https://github.com/youngmanalive'>GitHub</a>;
const linkedIn = <a target='_blank' href='https://www.linkedin.com/in/nathanharris-sf'>LinkedIn</a>;

const userNav = (currentUser, logout) => (
  <div className='navbar-main-user'>
    <NavLink to='/explore' className='navbar-logo'>fliqr</NavLink>
    <div className='navbar-user-links'>
      <NavLink exact to={`/users/${currentUser.id}`}>You</NavLink>
      <NavLink to='/explore'>Explore</NavLink>
    </div>
    <div className='navbar-user-info'>
      <Link to='/upload' className='navbar-upload-icon' />
      <div className='navbar-info-icon'>
        <div className='navbar-info-dropdown-container'>
          <div className='navbar-info-dropdown'>
            <p className='navbar-info-dropdown-header'>you're on fliqr!</p>
            <p className='navbar-info-dropdown-body'>
              This app was created using a Rails backend connected to a PostgreSQL database.
              Photos are stored using Amazon's S3. A React/Redux architecture completes the frontend for single page functionality.
            </p>
            <p className='navbar-info-dropdown-footer'>
              Check out my {gitHub} or {linkedIn}
            </p>
          </div>
        </div>
      </div>
      <div className='navbar-avatar-icon'>
        <div className='navbar-session-dropdown-container'>
          <div className='navbar-session-dropdown'>
            <p className='navbar-user-name'>Hello, {currentUser.fname}!</p>
            <p className='navbar-session-logout' onClick={() => logout()}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const splashNav = () => (
  <div className='navbar-main-splash'>
    <NavLink to='/' className='navbar-logo'>fliqr</NavLink>
    <SplashSessionContainer />
  </div>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? userNav(currentUser, logout) : splashNav()
);


export default NavBar;