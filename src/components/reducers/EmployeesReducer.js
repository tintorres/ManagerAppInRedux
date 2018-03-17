import {
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_SUCCESS:
      return {...state, [Date.now()]: action.payload};
    case EMPLOYEES_FETCH_SUCCESS:
      return state;
    case EMPLOYEE_SAVE_SUCCESS:
      const {name, phone, shift} = action.payload;
      const uid = action.payload.uid;
      return {...state, [uid]: {name, phone, shift} };
    case EMPLOYEE_DELETE_SUCCESS:
      const {[action.payload.uid]:value, ...newState} = state;
      return newState;
    default:
        return state;
  }
}
