import { combineReducers } from 'redux';
import sessionModalReducer from './session_modal_reducer';

export default combineReducers({
  sessionModal: sessionModalReducer
});
