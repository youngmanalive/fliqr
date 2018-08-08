import SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = formUser => dispatch => (
  SessionApiUtil.signup(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ))
);

export const login = formUser => dispatch => (
  SessionApiUtil.login(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => (
    dispatch({ type: LOGOUT_CURRENT_USER })
  ))
);
