import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/session_modal_actions';
import { login } from '../../actions/session_actions';


const mdp = dispatch => ({
  setModal: () => dispatch(setModal('signup')),
  demo: () => dispatch(login({ email: 'demo@fliqr.com', password: 'starwars'}))
});

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

export default connect(null, mdp)(SplashWelcome);
