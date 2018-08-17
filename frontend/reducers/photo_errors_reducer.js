import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO } from './photo_errors_reducer';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return [];
    case RECEIVE_PHOTO_ERRORS:
      return ['Photo title is required'];
    default:
      return state;
  }
};
