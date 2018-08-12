import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { setModal } from '../../actions/session_modal_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = dispatch => ({
  signup: () => dispatch(setModal('signup')),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);
