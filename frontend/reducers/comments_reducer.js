import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};