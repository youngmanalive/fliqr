import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.sate = {
      username: '',
      email: '',
      password: '',
      fname: '',
      lname: ''
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state);
      // .then(() => this.props.history.push('/users'));
  }

  render() {
    return (
      <div className='signup-form'>
        <h2>Sign Up</h2>
        <form onSubmit={this.submit.bind(this)}>

          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

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

          <label>First Name
            <input
              type='text'
              value={this.state.fname}
              onChange={this.update('fname')} />
          </label>

          <label>Last Name
            <input
              type='text'
              value={this.state.lname}
              onChange={this.update('lname')} />
          </label>

          <input type="submit" value="Submit" />

        </form>

      </div>
    );
  }
}


export default SignUp;
