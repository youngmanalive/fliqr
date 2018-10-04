import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/album_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album });
    case REMOVE_ALBUM:
      delete newState[action.albumId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};