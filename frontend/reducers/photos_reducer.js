import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.photo_id].commentIds.push(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      const { photo_id, id } = action.comment;
      const commentIds = newState[photo_id].commentIds;
      const index = commentIds.indexOf(id);
      commentIds.splice(index, 1);
      newState[photo_id].commentIds = commentIds;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
