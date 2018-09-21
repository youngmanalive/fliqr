import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({ type: RECEIVE_USER, user });
const receiveErrors = errors => ({ type: RECEIVE_USER_ERRORS, errors });

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
