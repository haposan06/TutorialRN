import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from "./components/LoginForm";
import Router from './Router'
class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyB43HhA7h8Oig5R2cknBGAkTacqBhnjOO0",
            authDomain: "authentication-fe6cf.firebaseapp.com",
            databaseURL: "https://authentication-fe6cf.firebaseio.com",
            projectId: "authentication-fe6cf",
            storageBucket: "authentication-fe6cf.appspot.com",
            messagingSenderId: "864353311782"
        };
        firebase.initializeApp(config);
    }
    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <Router/>
                </View>
            </Provider>
        )
    }
}

export default App;