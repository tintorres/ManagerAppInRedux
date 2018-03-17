import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: {prop, value}
  }
}

export const employeeCreate = ({name, phone, shift}) => {

  Actions.employeeList( {type: 'reset'});

  return {
      type: EMPLOYEE_CREATE_SUCCESS,
      payload: {name, phone, shift}
  }
}

export const employeeSave = ({name, phone, shift, uid}) => {
  Actions.employeeList( {type: 'reset'});

  return {
    type: EMPLOYEE_SAVE_SUCCESS,
    payload: {name, phone, shift, uid}
  }
}

export const employeeDelete = ({uid}) => {
    Actions.employeeList( {type: 'reset'});

    return {
      type: EMPLOYEE_DELETE_SUCCESS,
      payload: {uid}
    }
}


export const employeesFetch = () => {
  return {
    type: EMPLOYEES_FETCH_SUCCESS,
    payload: {}
  }
}
