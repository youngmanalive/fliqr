import { connect } from 'react-redux';
import SessionModal from './session_modal';
import { setModal } from '../../actions/session_modal_actions';

const msp = state => ({
  status: state.ui.sessionModal
});

const mdp = dispatch => ({
  close: () => dispatch(setModal('closed')),
  changeForm: (type) => dispatch(setModal(type))
});

export default connect(msp, mdp)(SessionModal);
