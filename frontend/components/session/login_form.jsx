import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
      // .then(() => this.props.history.push('/users'));
  }

  render() {
    return (
      <div className='signup-form'>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>

          <label>Email
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')} />
          </label>

          <label>Password
            <input
              type='text'
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value="Log In" />

        </form>

      </div>
    );
  }
}


export default withRouter(LoginForm);
