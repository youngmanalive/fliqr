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
    this.props.login(this.state)
      .then(() => this.props.history.push('/explore'));
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((err, i) => <li key={`error-${i}`}>{err}</li>)}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className='user-session-form'>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
            placeholder='Email' />

          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password' />

          {this.renderErrors()}

          <input type="submit" value="Log In" />

        </form>

      </div>
    );
  }
}


export default withRouter(LoginForm);
