import React from 'react';
import { NavLink } from 'react-router-dom';
import SplashContainer from '../splash/splash_container';

const logo = <NavLink to='/' className='navbar-logo'>fliqr</NavLink>;

const userNav = (currentUser, logout) => (
  <div className='navbar-main'>
    {logo}
    <div className='navbar-user-links'>
      <NavLink to='/home' activeClassName="active" >Explore</NavLink>
      <a>My Photos</a>
      <a>Albums</a>
    </div>
    <div className='navbar-user-info'>
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
  <div className='navbar-main'>
    {logo}
    <form onSubmit={() => signup()}>
      <input
        className='navbar-search'
        type='text'
        placeholder='Search...' />
    </form>
    <SplashContainer />
  </div>
);

const NavBar = ({ currentUser, logout, signup }) => (
  currentUser ? userNav(currentUser, logout) : splashNav(signup)
);


export default NavBar;
