import {Actions} from 'react-native-router-flux'
import {EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_UPDATE} from "./types";
import * as firebase from "firebase";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(()=>{
                dispatch({type: EMPLOYEE_CREATE});
                Actions.pop();
            });
    };
};

export const employeeFetch = ()=> {
    console.log('inside employeeFetch');

    const {currentUser} = firebase.auth();
  return (dispatch) =>{
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
          .on('value', snapshot => {
             dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
          });
  }
};