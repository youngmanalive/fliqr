import { connect } from 'react-redux';
import { setModal } from '../../actions/session_modal_actions';
import { login } from '../../actions/session_actions';
import SplashWelcome from './splash_welcome';

const mdp = dispatch => ({
  setModal: () => dispatch(setModal('signup')),
  demo: () => dispatch(login({ email: 'demo@fliqr.com', password: 'starwars'}))
});

export default connect(null, mdp)(SplashWelcome);
