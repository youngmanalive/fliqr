import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  RECEIVE_ALBUM_ERRORS
} from '../actions/album_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return [];
    case RECEIVE_ALBUM:
      return [];
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};