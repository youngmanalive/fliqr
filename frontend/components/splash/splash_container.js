import { connect } from 'react-redux';
import Splash from './splash';
import { setModal } from '../../actions/session_modal_actions';

const mdp = dispatch => ({
  setModal: type => dispatch(setModal(type))
});

export default connect(null, mdp)(Splash);
