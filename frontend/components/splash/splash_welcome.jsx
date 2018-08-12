import React from 'react';


class SplashWelcome extends React.Component {
  render() {
    return (
      <div>
        <div className='splash-welcome'>
          <h1>Find your inspiration.</h1>
          <p>Join the community and share your world.</p>
          <button onClick={() => this.props.setModal()}>Sign Up</button>
          <button onClick={() => this.props.demo()}>Demo Login</button>
        </div>
        <ul className='splash-slides'>
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
        </ul>
      </div>
    );
  }
}

export default SplashWelcome;
