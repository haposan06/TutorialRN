import firebase from '@firebase/app';
import '@firebase/auth'
import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from "./types";

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user =>  loginUserSuccess(dispatch, user))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(()=> loginUserFailed(dispatch))
            });
        };
};

const loginUserFailed = (dispatch)=>{
    console.log('inside loginUserFailed');

    dispatch({type: LOGIN_USER_FAILED});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user});
};