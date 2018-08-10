import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = formUser => dispatch => (
  SessionApiUtil.signup(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = formUser => dispatch => (
  SessionApiUtil.login(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => (
    dispatch({ type: LOGOUT_CURRENT_USER })
  ))
);
