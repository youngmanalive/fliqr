import React from 'react';
import { Link } from 'react-router-dom';
import SplashSessionContainer from '../splash/splash_session_container';

const logo = <Link to='/' className='navbar-logo'>fliqr</Link>;

const userNav = (currentUser, logout) => (
  <div className='navbar-main-user'>
    {logo}
    <div className='navbar-user-links'>
      <a href='#'>You</a>
      <Link to='/explore' >Explore</Link>
    </div>
    <div className='navbar-user-info'>
      <Link to='/upload' className='navbar-upload-icon' />
      <h3 className='navbar-user-name'>Hello, {currentUser.fname}</h3>
      <button
        className='navbar-session-logout'
        onClick={() => logout()}>
        Log out
      </button>
    </div>
  </div>
);

const splashNav = (signup) => (
  <div className='navbar-main-splash'>
    {logo}
    <div className='navbar-search'>
      <form onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}>
        <input
          type='text'
          placeholder='Search...' />
      </form>
    </div>
    <SplashSessionContainer />
  </div>
);

const NavBar = ({ currentUser, logout, signup }) => (
  currentUser ? userNav(currentUser, logout) : splashNav(signup)
);


export default NavBar;
