import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import {  signup, login, logout } from './util/session_api_util';
// window.signup = signup;
// window.login = login;
// window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>DIS IS LIT YO</h1>, root);
});
