import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import albumErrorsReducer from './album_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  photos: photoErrorsReducer,
  albums: albumErrorsReducer,
  comments: commentErrorsReducer
});
