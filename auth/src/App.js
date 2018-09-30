import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {Header} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {loggedIn: false}
    componentWillMount(){
        var config = {
            apiKey: "AIzaSyB43HhA7h8Oig5R2cknBGAkTacqBhnjOO0",
            authDomain: "authentication-fe6cf.firebaseapp.com",
            databaseURL: "https://authentication-fe6cf.firebaseio.com",
            projectId: "authentication-fe6cf",
            storageBucket: "authentication-fe6cf.appspot.com",
            messagingSenderId: "864353311782"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user)=>{
            if (user){
                this.setState({loggedIn: true});
            } false {
                this.setState({loggedIn: false});
            }
        });
    }
    render(){
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        )
    };
}

export default App