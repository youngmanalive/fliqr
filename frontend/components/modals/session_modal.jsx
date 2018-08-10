import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';


class SessionModal extends React.Component {

  formType() {
    return (this.props.status === 'signup') ? (
      <div>
        <SignupFormContainer />
        <p>Already a member? </p>
        <button onClick={() => this.props.changeForm('login')}>Log In</button>
      </div>
    ) : (
      <div>
        <LoginFormContainer />
        <p>Need an account? </p>
        <button onClick={() => this.props.changeForm('signup')}>Sign Up</button>
      </div>
    );
  }


  render() {
    if (this.props.status === 'closed') return <div/>;

    return (
      <div className='modal-background' onClick={this.props.close}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          <div className='modal-child-form'>{this.formType()}</div>
        </div>
      </div>
    );
  }
}

export default SessionModal;
