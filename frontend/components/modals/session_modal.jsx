import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';


class SessionModal extends React.Component {

  userForm() {
    return (this.props.status === 'signup') ? (
      <div>
        <SignupFormContainer />
        <div className='modal-options-container'>
          <p>Already a member? <a
            onClick={() => this.props.changeForm('login')}>
            Log In</a>
          </p>
          <p style={{marginTop: '10px'}}>Or try out the <a
            onClick={() => this.props.changeForm('demo')}>
            Demo Account</a>
          </p>
        </div>
      </div>
    ) : (
      <div>
        <LoginFormContainer status={this.props.status} />
        <div className='modal-options-container'>
          <p>Not Registered? <a
            onClick={() => this.props.changeForm('signup')}>
            Sign Up</a>
          </p>
          <p style={{marginTop: '10px'}}>Or try out the <a
            onClick={() => this.props.changeForm('demo')}>
            Demo Account</a>
          </p>
        </div>
      </div>
    );
  }

  modalHeader() {
    return (
      <div className='modal-header'>
        <p className='modal-logo'>fliqr</p>
        <button
          className='modal-header-button'
          onClick={this.props.close}>&times;</button>
      </div>
    );
  }


  render() {
    if (this.props.status === 'closed') return null;

    return (
      <div className='modal-background' onClick={this.props.close}>
        <div className='modal-user-form' onClick={e => e.stopPropagation()}>
          {this.modalHeader()}
          {this.userForm()}
        </div>
      </div>
    );
  }
}

export default SessionModal;
