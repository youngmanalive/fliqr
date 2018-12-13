import { connect } from 'react-redux';
import { setModal } from '../../actions/session_modal_actions';
import { login } from '../../actions/session_actions';
import SplashWelcome from './splash_welcome';

const mdp = dispatch => ({
  setModal: () => dispatch(setModal('signup')),
  runDemo: () => dispatch(setModal('demo'))
});

export default connect(null, mdp)(SplashWelcome);
