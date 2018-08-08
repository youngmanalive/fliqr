import React from 'react';
import ReactDOM from 'react-dom';
import {  signup, login, logout } from './actions/session_actions';

// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.dispatch = dispatch;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>DIS IS LIT YO</h1>, root);
});
