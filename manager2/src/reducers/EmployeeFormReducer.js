import {EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_UPDATE} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    employeeList: ''
};

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
      case EMPLOYEE_UPDATE:
          return {...state, [action.payload.prop]: action.payload.value};
      case EMPLOYEE_CREATE:
          return INITIAL_STATE;
      default:
          return state;
  }  
};