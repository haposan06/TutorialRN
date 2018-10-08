import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from "../actions/types";

const INITIAl_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};
export default (state = INITIAl_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true};
        case LOGIN_USER_SUCCESS:
            return {...state, error: '', user: action.payload, loading: false};
        case LOGIN_USER_FAILED:
            return {...state, error: 'Authentication Failed', password: '', email: '', loading:false};
        default:
            return state;
    }
}