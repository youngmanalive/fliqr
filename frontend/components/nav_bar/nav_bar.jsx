import React from 'react';
import { Link } from 'react-router-dom';
import SplashContainer from '../splash/splash_container';

const logo = <Link to='/' className='navbar-logo'>fliqr</Link>;

const userNav = (currentUser, logout) => (
  <div className='navbar-main'>
    {logo}
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

const splashNav = () => (
  <div className='navbar-main'>
    {logo}

    <SplashContainer />
  </div>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? userNav(currentUser, logout) : splashNav()
);


export default NavBar;


// <form onSubmit={() => window.alert('SIKE!!!!!!!')}>
//   <input
//     className='navbar-search'
//     type='text'
//     placeholder='Search...' />
// </form>
