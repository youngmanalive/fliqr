import { 
  RECEIVE_PHOTO_ERRORS, 
  RECEIVE_PHOTO 
} from '../actions/photo_actions';
import { CLEAR_PHOTO_ERRORS } from '../actions/error_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return {};
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
