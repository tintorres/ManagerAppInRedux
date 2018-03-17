import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({email, password}) => {
  if(_loginUserSimulator({email, password})) {
    Actions.main();
    return {
      type: LOGIN_USER_SUCCESS,
      payload: {email, password}
    }
  }
  else {
    return {
      type: LOGIN_USER_FAIL,
      payload: null
    }
  }
}

const _loginUserSimulator = ({email, password}) => {
  if(password === 'password') {
    console.log('Login Success');
    return true;
  } else {
    console.log('Login failed');
    return false;
  }
}
