import { RECEIVE_SESSION_MODAL } from '../actions/session_modal_actions';

const SessionModalReducer = (state = 'closed', action) => {
  switch (action.type) {
    case RECEIVE_SESSION_MODAL:
      return action.status;
    default:
      return state;
  }
};

export default SessionModalReducer;
