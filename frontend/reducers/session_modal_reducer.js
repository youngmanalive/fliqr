import { RECEIVE_SESSION_MODAL } from '../actions/session_modal_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionModalReducer = (state = 'closed', action) => {
  switch (action.type) {
    case RECEIVE_SESSION_MODAL:
      return action.status;
    case RECEIVE_CURRENT_USER:
      return 'closed';
    default:
      return state;
  }
};

export default SessionModalReducer;
