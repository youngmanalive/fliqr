import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import { SignUp } from './signup';

const mdp = dispatch => ({
  createUser: formUser => dispatch(createUser(formUser))
});

export default connect(null, mdp)(SignUp);
