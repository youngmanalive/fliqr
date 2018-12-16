import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      fname: '',
      lname: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Fliqr - Signup';
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.fname}
            onChange={this.update('fname')}
            placeholder='First Name'/>
          <input
            type='text'
            value={this.state.lname}
            onChange={this.update('lname')}
            placeholder='Last Name'/>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'/>
          <input
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
            placeholder='Email'/>
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password'/>
          {this.renderErrors()}
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}


export default withRouter(SignupForm);
