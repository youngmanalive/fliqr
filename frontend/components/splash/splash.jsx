import React from 'react';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <h1>Fliqr!</h1>
        <button onClick={() => this.props.openModal("login")}>Log in</button>
        <button onClick={() => this.props.openModal("signup")}>Sign up</button>
      </div>
    );
  }
}

export default Splash;
