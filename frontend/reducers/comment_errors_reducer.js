import { 
  RECEIVE_COMMENT_ERRORS,
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
 } from '../actions/comment_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return [];
    case RECEIVE_COMMENT:
      return [];
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};