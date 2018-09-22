import React from 'react';
import { Link } from 'react-router-dom';
import SplashSessionContainer from '../splash/splash_session_container';

const logo = <Link to='/' className='navbar-logo'>fliqr</Link>;


// const userNav = (currentUser, logout) => (
//   <div className='navbar-main-user'>
//     {logo}
//     <div className='navbar-user-links'>
//       <Link to={`/users/${currentUser.id}`}>You</Link>
//       <Link to='/explore' >Explore</Link>
//     </div>
//     <div className='navbar-user-info'>
//       <Link to='/upload' className='navbar-upload-icon' />
//       <div className='navbar-info-icon' />
//       <h3 className='navbar-user-name'>Hello, {currentUser.fname}</h3>
//       <button
//         className='navbar-session-logout'
//         onClick={() => logout()}>
//         Log out
//       </button>
//     </div>
//   </div>
// );

const userNav = (currentUser, logout) => (
  <div className='navbar-main-user'>
    {logo}
    <div className='navbar-user-links'>
      <Link to={`/users/${currentUser.id}`}>You</Link>
      <Link to='/explore' >Explore</Link>
    </div>

    <div className='navbar-user-info'>
      <Link to='/upload' className='navbar-upload-icon' />
      <div className='navbar-info-icon' />

      <div className='navbar-avatar-icon'>
        <div className='navbar-session-dropdown-container'>
          <div className='navbar-session-dropdown'>
            <p className='navbar-user-name'>Hello, {currentUser.fname}!</p>
            <p className='navbar-session-logout'
              onClick={() => logout()}>
              Sign Out
              </p>
            {/* <button
              className='navbar-session-logout'
              onClick={() => logout()}>
              Log out
            </button> */}
          </div>
        </div>
      </div>

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
