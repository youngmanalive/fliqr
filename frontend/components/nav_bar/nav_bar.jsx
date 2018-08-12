import React from 'react';
import { NavLink } from 'react-router-dom';
import SplashSessionContainer from '../splash/splash_session_container';

const logo = <NavLink to='/' className='navbar-logo'>fliqr</NavLink>;

const userNav = (currentUser, logout) => (
  <div className='navbar-main-user'>
    {logo}
    <div className='navbar-user-links'>
      <NavLink to='/home' activeClassName="active" >Explore</NavLink>
      <a href='#'>My Photos</a>
      <a href='#'>Albums</a>
    </div>
    <div className='navbar-user-info'>
      <div className='navbar-upload-icon' />
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
