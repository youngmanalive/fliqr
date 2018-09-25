import React from 'react';

class SplashSession extends React.Component {
  render() {
    return (
      <div className='navbar-session'>
        <button
          className='navbar-session-login'
          onClick={() => this.props.setModal("login")}>
          Log In
        </button>

        <button
          className='navbar-session-signup'
          onClick={() => this.props.setModal("signup")}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default SplashSession;
