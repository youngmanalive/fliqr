import { combineReducers } from 'redux';
import SessionReducer from './session';

export default combineReducers({
  session: SessionReducer
});
