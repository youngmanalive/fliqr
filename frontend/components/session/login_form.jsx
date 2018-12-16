import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    
    this.demo = { email: 'demo@fliqr.com', password: 'starwars' };
    this.demoIdx = 0;
    this.demoInterval = null;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Fliqr - Login';
    if (this.props.status === 'demo') {
      this.runDemo();
    }
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status !== status && status === 'demo') {
      this.runDemo();
    }
  }

  runDemo() {
    this.setState({ email: '', password: '' });
    setTimeout(() => {
      this.demoInterval = setInterval(() => {
        if (this.demoIdx < this.demo.email.length) {
          this.setState({
            email: this.state.email + this.demo.email[this.demoIdx]
          }, () => this.demoIdx++);
        } else {
          clearInterval(this.demoInterval);
          this.demoIdx = 0;
          this.demoInterval = setInterval(() => {
            if (this.demoIdx < this.demo.password.length) {
              this.setState({
                password: this.state.password + this.demo.password[this.demoIdx]
              }, () => this.demoIdx++);
            } else {
              clearInterval(this.demoInterval);
              setTimeout(this.handleSubmit, 300);
            }
          }, 80);
        }
      }, 60);
    }, 200);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.login(this.state);
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
