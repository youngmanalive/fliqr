import SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const createUser = formUser => dispatch => (
  SessionApiUtil.postUser(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ))
);

export const login = formUser => dispatch => (
  SessionApiUtil.postSession(formUser).then(user => (
    dispatch({ type: RECEIVE_CURRENT_USER, user })
  ))
);

export const logut = () => dispatch => (
  SessionApiUtil.deleteSession().then(() => (
    dispatch({ type: LOGOUT_CURRENT_USER })
  ))
);
