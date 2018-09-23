import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  photos: photoErrorsReducer,
  comments: commentErrorsReducer
});
