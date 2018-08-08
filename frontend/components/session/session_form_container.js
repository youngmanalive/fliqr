import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { SessionForm } from './signup';

const mdp = dispatch => ({
  signup: formUser => dispatch(signup(formUser))
});

export default connect(null, mdp)(SessionForm);
